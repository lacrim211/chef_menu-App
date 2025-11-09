# chef_menu-App
MAST5112
Chef Menu App - React Native
A dynamic mobile application for private chef Christoffel to manage his digital menu and provide exceptional culinary experiences to clients.
App Overview
The Chef Menu App is a cross-platform React Native application built with TypeScript that allows a private chef to:

Create and manage menu items with detailed information

View menu statistics including average prices per course

Remove menu items as needed

Provide guests with a filtered view of the menu by course type
Features
Core Functionality
Menu Management: Add, view, and remove menu items

Course Organization: Categorize items as Starters, Mains, Desserts, or Drinks

Price Analytics: Automatic calculation of average prices per course

Guest Experience: Separate guest view with course filtering

Real-time Updates: Instant UI updates when menu changes
Technical Features
Cross-Platform: Works on both iOS and Android

TypeScript: Full type safety throughout the application

Modern UI: Clean, intuitive interface with smooth animations

State Management: Global state using React Context API

Navigation: Seamless screen transitions with React Navigation
Technology Stack
Framework: React Native with Expo

Language: TypeScript

Navigation: React Navigation Native Stack

State Management: React Context API

UI Components: Custom built with React Native

Development: Expo SDK 48
Prerequisites
Before running this project, make sure you have:

Node.js (version 14 or higher)

npm or yarn package manager

Expo CLI installed globally

iOS Simulator (for Mac) or Android Studio (for Android development)
App Screens
Main Screen (MainScreen.tsx)
Dashboard view of all menu items

Display total menu item count

Show average prices per course

Remove menu items functionality

Navigation to other screens
Add Meal Screen (NewMealScreen.tsx)
Form to add new menu items

Input fields for name, description, course selection, and price

Form validation and error handling

Course selection via picker

Guest Menu Screen (GuestMenuScreen.tsx)
Clean interface for guest viewing

Filter menu items by course type

Horizontal filter buttons for easy navigation

Professional presentation of menu items
 Learning Objectives Demonstrated
This project demonstrates proficiency in:

React Native Core Components: Views, Text, TextInput, TouchableOpacity, ScrollView

TypeScript Integration: Strong typing, interfaces, and type safety

State Management: Global state with Context API and useState hooks

Navigation: Multi-screen navigation with React Navigation

Loop Implementations: for, while, and for...in loops for calculations

Function Organization: Modular code with separated concerns

UI/UX Design: Consistent layouts, colors, and user-friendly interfaces

Array Manipulations: Filtering, mapping, and reducing operations

Key Technical Implementations
State Management
typescript
// Global state using Context API
const PantryContext = createContext<PantryContextType | undefined>(undefined);
Average Price Calculations
for loops: Overall average calculation

while loops: Course-specific averages

for--in loops: Iterating through course arrays
Array Operations
Menu item storage and manipulation

Real-time filtering for guest view

Dynamic updates on add/remove operations

🎨 Design System
Color Scheme: Professional blues and complementary colors

Typography: Consistent font sizes and weights

Spacing: Uniform padding and margins

Components: Reusable card components and buttons

Animations: Smooth transitions and feedback
Developed with ❤️ using React Native and TypeScript


