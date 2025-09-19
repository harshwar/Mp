package com.example.practical8;

import android.database.Cursor; // Import Cursor
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView; // Import TextView
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    DBHelper DB;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        EditText username = findViewById(R.id.username);
        EditText password = findViewById(R.id.password);
        Button btnRegister = findViewById(R.id.btnRegister);
        Button btnLogin = findViewById(R.id.btnLogin);
        DB = new DBHelper(this);

        // --- New Views Initialized ---
        Button btnViewAll = findViewById(R.id.btnViewAll);
        TextView resultView = findViewById(R.id.resultView);


        btnRegister.setOnClickListener(v -> {
            String user = username.getText().toString();
            String pass = password.getText().toString();

            if (user.isEmpty() || pass.isEmpty()) {
                Toast.makeText(this, "Please enter all fields", Toast.LENGTH_SHORT).show();
                return;
            }
            if (DB.checkUsername(user)) {
                Toast.makeText(this, "User already exists!", Toast.LENGTH_SHORT).show();
            } else {
                DB.insertData(user, pass);
                Toast.makeText(this, "Registered successfully", Toast.LENGTH_SHORT).show();
            }
        });

        btnLogin.setOnClickListener(v -> {
            String user = username.getText().toString();
            String pass = password.getText().toString();

            if (user.isEmpty() || pass.isEmpty()) {
                Toast.makeText(this, "Please enter all fields", Toast.LENGTH_SHORT).show();
                return;
            }
            if (DB.checkUsernamePassword(user, pass)) {
                Toast.makeText(this, "Login Successful!", Toast.LENGTH_SHORT).show();
            } else {
                Toast.makeText(this, "Invalid credentials", Toast.LENGTH_SHORT).show();
            }
        });

        // --- New OnClickListener for the View All Button ---
        btnViewAll.setOnClickListener(v -> {
            Cursor cursor = DB.getAllUsers();
            if (cursor.getCount() == 0) {
                resultView.setText("No users found.");
                return;
            }

            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("Registered Users:\n\n");

            // Loop through all the rows from the database
            while (cursor.moveToNext()) {
                // Column 0 is "username", Column 1 is "password"
                stringBuilder.append("Username: ").append(cursor.getString(0)).append("\n");
            }
            cursor.close(); // IMPORTANT: Always close the cursor when you're done.

            // Set the final text to the TextView
            resultView.setText(stringBuilder.toString());
        });
    }
}
