import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import MainPortfolio from "./pages/MainPortfolio";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import { AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Switch>
          <Route path="/" component={Welcome} />
          <Route path="/home" component={MainPortfolio} />
          <Route path="/legacy" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
      <Toaster />
    </>
  );
}
