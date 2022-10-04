import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RenderingElements from "./pages/3RenderingElements";
import ComponentsAndProps from "./pages/4ComponentsAndProps";
import StateAndLifecycle from "./pages/5StateAndLifecycle";
import HandlingEvents from "./pages/6HandlingEvents";
import ConditionalRendering from "./pages/7ConditionalRendering/7ConditionalRendering";
import ListsAndKeys from "./pages/8ListsAndKeys/8ListsAndKeys";
import Forms from "./pages/9Forms/9Forms";
import LiftingStateUp from "./pages/10LiftingStateUp";
import CompositionVsInheritance from "./pages/11CompositionVsInheritance/11CompositionVsInheritance";
import ThinkingInReact from "./pages/12ThinkingInReact";
import IntroducingHooks from "./pages/hooks/IntroducingHooks";
import Context from "./pages/Context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rendering-elements" element={<RenderingElements />} />
        <Route path="/components-and-props" element={<ComponentsAndProps />} />
        <Route path="/state-and-lifecycle" element={<StateAndLifecycle />} />
        <Route path="/handling-events" element={<HandlingEvents />} />
        <Route
          path="/conditional-rendering"
          element={<ConditionalRendering />}
        />
        <Route path="/lists-and-keys" element={<ListsAndKeys />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/lifting-state-up" element={<LiftingStateUp />} />
        <Route
          path="/composition-vs-inheritance"
          element={<CompositionVsInheritance />}
        />
        <Route path="/thinking-in-react" element={<ThinkingInReact />} />
        <Route path="/context" element={<Context />} />
        <Route path="/introducing-hooks" element={<IntroducingHooks />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
