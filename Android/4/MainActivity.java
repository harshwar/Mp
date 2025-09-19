package com.example.practical8; // Your package name

import android.database.Cursor;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    Database db;
    EditText idInput, nameInput, marksInput;
    Button addBtn, updateBtn, deleteBtn, viewBtn;
    TextView resultView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Initialize the database helper
        db = new Database(this);

        // Link Java variables to the UI elements in the XML
        idInput = findViewById(R.id.idInput);
        nameInput = findViewById(R.id.nameInput);
        marksInput = findViewById(R.id.marksInput);
        addBtn = findViewById(R.id.addBtn);
        updateBtn = findViewById(R.id.updateBtn);
        deleteBtn = findViewById(R.id.deleteBtn);
        viewBtn = findViewById(R.id.viewBtn);
        resultView = findViewById(R.id.resultView);

        // Set the action for the "Add" button
        addBtn.setOnClickListener(v -> {
            String name = nameInput.getText().toString().trim();
            String marksStr = marksInput.getText().toString().trim();

            if (name.isEmpty() || marksStr.isEmpty()) {
                Toast.makeText(this, "Please enter name and marks", Toast.LENGTH_SHORT).show();
                return;
            }
            int marks = Integer.parseInt(marksStr);
            if (db.insertStudent(name, marks)) {
                Toast.makeText(this, "Inserted Successfully", Toast.LENGTH_SHORT).show();
            } else {
                Toast.makeText(this, "Insert Failed", Toast.LENGTH_SHORT).show();
            }
        });

        // Set the action for the "Update" button
        updateBtn.setOnClickListener(v -> {
            String idStr = idInput.getText().toString().trim();
            String name = nameInput.getText().toString().trim();
            String marksStr = marksInput.getText().toString().trim();

            if (idStr.isEmpty() || name.isEmpty() || marksStr.isEmpty()) {
                Toast.makeText(this, "Enter ID, new name, and new marks", Toast.LENGTH_SHORT).show();
                return;
            }
            int id = Integer.parseInt(idStr);
            int marks = Integer.parseInt(marksStr);
            if (db.updateStudent(id, name, marks)) {
                Toast.makeText(this, "Updated Successfully", Toast.LENGTH_SHORT).show();
            } else {
                Toast.makeText(this, "Update Failed. ID not found.", Toast.LENGTH_SHORT).show();
            }
        });

        // Set the action for the "Delete" button
        deleteBtn.setOnClickListener(v -> {
            String idStr = idInput.getText().toString().trim();
            if (idStr.isEmpty()) {
                Toast.makeText(this, "Enter ID to delete", Toast.LENGTH_SHORT).show();
                return;
            }
            int id = Integer.parseInt(idStr);
            if (db.deleteStudent(id)) {
                Toast.makeText(this, "Deleted Successfully", Toast.LENGTH_SHORT).show();
            } else {
                Toast.makeText(this, "Delete Failed. ID not found.", Toast.LENGTH_SHORT).show();
            }
        });

        // Set the action for the "View" button
        viewBtn.setOnClickListener(v -> {
            Cursor cursor = db.getAllStudents();
            if (cursor.getCount() == 0) {
                resultView.setText("No students found.");
                return;
            }
            StringBuilder sb = new StringBuilder();
            while (cursor.moveToNext()) {
                // We get data by column index: 0 for ID, 1 for Name, 2 for Marks
                sb.append("ID: ").append(cursor.getInt(0))
                        .append(", Name: ").append(cursor.getString(1))
                        .append(", Marks: ").append(cursor.getInt(2))
                        .append("\n");
            }
            resultView.setText(sb.toString());
        });
    }
}