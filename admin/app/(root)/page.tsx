import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton afterSignOutUrl='/' />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default SetupPage;
