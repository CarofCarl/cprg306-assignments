"use client";
// Import necessary hooks and components
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  // Get authentication-related functions and user data from useUserAuth hook
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Handle sign in with GitHub
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  // Handle sign out functionality
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // Main container with centered content
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* Main title */}
      <h1 className="text-4xl font-bold mb-8">Welcome to Shopping List App</h1>

      {/* Conditional rendering based on user authentication status */}
      {!user ? (
        // Show sign in button if user is not logged in
        <button
          onClick={handleSignIn}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign in with GitHub
        </button>
      ) : (
        // Show user info, navigation and sign out button if user is logged in
        <div className="flex flex-col items-center gap-4">
          {/* Display user's name and email */}
          <p className="text-xl">
            Welcome, {user.displayName} ({user.email})
          </p>

          {/* Link to shopping list page */}
          <Link
            href="/week-9/shopping-list"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Go to Shopping List
          </Link>

          {/* Sign out button */}
          <button
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
