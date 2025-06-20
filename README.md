﻿# 📝 To-Do List App (React Native + Expo)

A minimalist and efficient mobile To-Do List app built using **React Native**, **Expo**, and **expo-notifications**. Users can add, view, and delete tasks — with a splash screen and ready-to-use notification setup for future reminders.

---

## 📱 Screenshots

| Splash Screen | Task List | Add Task |
|---------------|-----------|----------|
| ![splash](./assets/Splash.jpg) | ![tasks](./assets/Home.jpg) | ![add](./assets/TaskAdded.jpg) |



---

## 🚀 Features

- 📝 Add tasks to your daily list
- ✅ Tap to mark tasks as completed (by removing them)
- 🗑️ Remove tasks by tapping on them
- 🔔 Notification channel setup (via `expo-notifications`)
- 🟦 Custom Splash screen with emoji-based logo
- 📱 Fully responsive with keyboard handling

---
## Folder Structure

``` TODO-LIST
├── components/
│ ├── Splash.js // Splash screen with notification setup
│ └── Task.js // Reusable task component
├── screens/
│ └── Home.js // Main to-do list functionality
├── assets/ // App images/screenshots
├── App.js // Navigation configuration
└── README.md // Project documentation ```

```


---

## 🧩 Component Functionality

### 🔹 `App.js`
- Sets up the **navigation** using React Navigation
- Uses a stack navigator to switch between `Splash` and `Home`

---

### 🔹 `Splash.js`
- Displays a **splash screen** with an emoji-style app logo
- Initializes a **notification channel** for Android using `expo-notifications`
- Waits 2 seconds, then **navigates to the Home screen**

📸 ![splash](./assets/Splash.jpg)

---

### 🔹 `Home.js`
- Core to-do app logic
- Allows user to:
  - Type a new task
  - Add the task to a scrollable list
  - Tap a task to remove it (as a way of marking it done)
- Uses `KeyboardAvoidingView` and `TouchableWithoutFeedback` to handle keyboard properly

📸 ![tasks](./assets/Home.jpg)

---

### 🔹 `Task.js`
- A **reusable component** that represents a single task item
- Displays:
  - Colored square for task bullet
  - Task description text
  - Circular right edge for styling
- Tapping the task (in `Home.js`) calls `completetask()` to remove it

📸 ![add](./assets/TaskAdded.jpg)

---

## 📦 Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [expo-notifications](https://docs.expo.dev/versions/latest/sdk/notifications/)
- [React Navigation](https://reactnavigation.org/)

---

## 🏁 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Hunter69240/todo-app.git
cd todo-app
```

### 2. Install Dependencies

```bash
npm install
npx expo install
```

### 3. Start the App

```bash
npx expo start
```
- Use Expo Go to scan the QR code

- Or run on an Android/iOS emulator


## ✨ Future Improvements

- Set reminders for tasks via local notifications

- Add task due dates and categories

- Swipe to delete or complete

- Dark mode support

- Persistent storage using AsyncStorage or Firebase