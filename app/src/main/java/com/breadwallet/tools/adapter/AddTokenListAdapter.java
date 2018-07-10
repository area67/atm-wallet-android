package com.breadwallet.tools.adapter;

import android.app.Activity;
import android.content.Context;
import android.graphics.Typeface;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.util.TypedValue;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;

import com.breadwallet.R;
import com.breadwallet.presenter.customviews.BaseTextView;
import com.breadwallet.presenter.entities.TokenItem;
import com.breadwallet.tools.util.BRConstants;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class AddTokenListAdapter extends RecyclerView.Adapter<AddTokenListAdapter.TokenItemViewHolder> {

    private Context mContext;
    private ArrayList<TokenItem> mTokens;
    private ArrayList<TokenItem> mBackupTokens;
    private static final String TAG = AddTokenListAdapter.class.getSimpleName();
    private OnTokenAddOrRemovedListener mListener;

    public AddTokenListAdapter(Context context, ArrayList<TokenItem> tokens, OnTokenAddOrRemovedListener listener) {

        this.mContext = context;
        this.mTokens = tokens;
        this.mListener = listener;
        this.mBackupTokens = mTokens;

        Collections.sort(mTokens, new Comparator<TokenItem>() {
            @Override
            public int compare(TokenItem one, TokenItem two) {
                return one.symbol.compareToIgnoreCase(two.symbol);
            }
        });

    }

    public interface OnTokenAddOrRemovedListener {

        void onTokenAdded(TokenItem token);

        void onTokenRemoved(TokenItem token);
    }


    @Override
    public void onBindViewHolder(final @NonNull AddTokenListAdapter.TokenItemViewHolder holder, final int position) {

        TokenItem item = mTokens.get(position);
        String currencyCode = item.symbol.toLowerCase();

        if (currencyCode.equals("1st")) {
            currencyCode = "first";
        }

        String iconResourceName = currencyCode;
        int iconResourceId = mContext.getResources().getIdentifier(currencyCode, BRConstants.DRAWABLE, mContext.getPackageName());

        holder.name.setText(mTokens.get(position).symbol);
        holder.symbol.setText(mTokens.get(position).name);
        try {
            holder.logo.setBackground(mContext.getDrawable(iconResourceId));
        } catch (Exception e) {
            e.printStackTrace();
            Log.d(TAG, "Error finding icon for -> " + iconResourceName);
        }

        TypedValue addWalletTypedValue = new TypedValue();
        TypedValue removeWalletTypedValue = new TypedValue();

        mContext.getTheme().resolveAttribute(R.attr.add_wallet_button_background, addWalletTypedValue, true);
        mContext.getTheme().resolveAttribute(R.attr.remove_wallet_button_background, removeWalletTypedValue, true);

        holder.addRemoveButton.setText(mContext.getString(item.isAdded ? R.string.TokenList_remove : R.string.TokenList_add));
        holder.addRemoveButton.setBackground(mContext.getDrawable(item.isAdded ? removeWalletTypedValue.resourceId : addWalletTypedValue.resourceId));
        holder.addRemoveButton.setTextColor(mContext.getColor(item.isAdded ? R.color.button_cancel_add_wallet_text : R.color.button_add_wallet_text));

        holder.addRemoveButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                // Set button to "Remove"
                if (!mTokens.get(position).isAdded) {
                    mTokens.get(position).isAdded = true;
                    mListener.onTokenAdded(mTokens.get(position));
                } else {
                    // Set button back to "Add"
                    mTokens.get(position).isAdded = false;
                    mListener.onTokenRemoved(mTokens.get(position));

                }

            }
        });


    }

    @Override
    public int getItemCount() {
        return mTokens.size();
    }

    @NonNull
    @Override
    public AddTokenListAdapter.TokenItemViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        LayoutInflater inflater = ((Activity) mContext).getLayoutInflater();
        View convertView = inflater.inflate(R.layout.token_list_item, parent, false);

        TokenItemViewHolder holder = new TokenItemViewHolder(convertView);
        holder.setIsRecyclable(false);

        return holder;
    }

    public class TokenItemViewHolder extends RecyclerView.ViewHolder {

        private ImageView logo;
        private BaseTextView symbol;
        private BaseTextView name;
        private Button addRemoveButton;

        public TokenItemViewHolder(View view) {
            super(view);

            logo = view.findViewById(R.id.token_icon);
            symbol = view.findViewById(R.id.token_ticker);
            name = view.findViewById(R.id.token_name);
            addRemoveButton = view.findViewById(R.id.add_remove_button);

            Typeface typeface = Typeface.createFromAsset(mContext.getAssets(), "fonts/CircularPro-Book.otf");
            addRemoveButton.setTypeface(typeface);
        }
    }

    public void resetFilter() {
        mTokens = mBackupTokens;
        notifyDataSetChanged();
    }

    public void filter(String query) {
        resetFilter();
        ArrayList<TokenItem> filteredList = new ArrayList<>();

        query = query.toLowerCase();

        for (TokenItem item : mTokens) {
            if (item.name.toLowerCase().contains(query) || item.symbol.toLowerCase().contains(query)) {
                filteredList.add(item);
            }
        }

        mTokens = filteredList;
        notifyDataSetChanged();

    }

}
