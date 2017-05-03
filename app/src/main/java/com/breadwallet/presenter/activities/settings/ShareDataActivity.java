package com.breadwallet.presenter.activities.settings;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.CompoundButton;
import android.widget.ToggleButton;

import com.breadwallet.R;
import com.breadwallet.presenter.activities.ActivityUTILS;
import com.breadwallet.tools.manager.SharedPreferencesManager;

public class ShareDataActivity extends AppCompatActivity {
    private static final String TAG = ShareDataActivity.class.getName();
    private ToggleButton toggleButton;
    public static boolean appVisible = false;
    private static ShareDataActivity app;

    public static ShareDataActivity getApp() {
        return app;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_share_data);

        toggleButton = (ToggleButton) findViewById(R.id.toggleButton);
        toggleButton.setChecked(SharedPreferencesManager.getShareData(this));
        toggleButton.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                SharedPreferencesManager.putShareData(ShareDataActivity.this, isChecked);
            }
        });

    }

    @Override
    protected void onResume() {
        super.onResume();
        appVisible = true;
        app = this;
        ActivityUTILS.init(this);
    }

    @Override
    protected void onPause() {
        super.onPause();
        appVisible = false;
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        overridePendingTransition(R.anim.enter_from_left, R.anim.exit_to_right);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
    }

}
