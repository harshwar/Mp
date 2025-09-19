package com.example.practical; // Or whatever your package name is

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

import com.example.practical.R;

public class SecondActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // This screen's only job is to show its own layout.
        setContentView(R.layout.activity_second);
    }
}