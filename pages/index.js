import Home from "@/components/HomePage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "../styles/variables.module.scss";

export default function App() {
  return (
    <GoogleOAuthProvider clientId="495563060766-8njk2s10fud4v1cmrrb5vl54ofhqbnmb.apps.googleusercontent.com">
      <Home />
    </GoogleOAuthProvider>
  );
}
