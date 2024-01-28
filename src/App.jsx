import React from "react";

// react router dom
import { Route, Router, Routes } from "react-router-dom";

// home page
import HomePage from "./Pages/HomePage";

// components page
import ComponentsPage from "./Pages/ComponentsPage";

// documentation page
import OverviewPage from "./Pages/OverviewPage";
import FaqPage from "./Pages/FaqPage";
import TempletePage from "./Pages/TempletePage";

// buttons pages
import NormalPage from "./Pages/Components/Buttons/NormalPage";
import RgbButtonPage from "./Pages/Components/Buttons/RgbButtonPage";
import AnimatedButtonPage from "./Pages/Components/Buttons/AnimatedButtonPage";

// all components
import AllComponentsPage from "./Pages/Components/AllComponentsPage";

// navigation pages
import DropDownPage from "./Pages/Components/Navigation/DropDownPage";
import TabsPage from "./Pages/Components/Navigation/TabsPage";
import ModalPage from "./Pages/Components/Navigation/ModalPage";

// feedback pages
import SkeletonPage from "./Pages/Components/Feedback/SkeletonPage";
import AlertMessagePage from "./Pages/Components/Feedback/AlertMessagePage";
import DialogPage from "./Pages/Components/Feedback/DialogPage";
import TestimonialPage from "./Pages/Components/Feedback/TestimonialPage";
import NotificationPage from "./Pages/Components/Feedback/NotificationPage";

// data display
import BadgePage from "./Pages/Components/Data Display/BadgePage";
import TooltipPage from "./Pages/Components/Data Display/TooltipPage";

// surface pages
import CardPage from "./Pages/Components/Surfaces/CardPage";
import ImageGalleryPage from "./Pages/Components/Surfaces/ImageGalleryPage";
import AccordingPage from "./Pages/Components/Surfaces/AccordingPage";
import AppbarPage from "./Pages/Components/Surfaces/AppbarPage";

const App = () => {
  return (
    <>
      {/* all routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* documentation */}
        <Route path="/getting-started" element={<ComponentsPage />} />
        <Route path="/getting-started/overview" element={<OverviewPage />} />
        <Route path="/getting-started/faq" element={<FaqPage />} />
        <Route path="/getting-started/templates" element={<TempletePage />} />

        {/* components */}

        <Route
          path="/components/all-components"
          element={<AllComponentsPage />}
        />
        {/* buttons */}
        <Route path="/components/normal-button" element={<NormalPage />} />
        <Route path="/components/rgb-border" element={<RgbButtonPage />} />
        <Route
          path="/components/animated-button"
          element={<AnimatedButtonPage />}
        />

        {/* navigation */}
        <Route path="/components/dropdown" element={<DropDownPage />} />
        <Route path="/components/tabs" element={<TabsPage />} />
        <Route path="/components/modal" element={<ModalPage />} />

        {/* feedback */}
        <Route path="/components/skeleton" element={<SkeletonPage />} />
        <Route
          path="/components/alert-message"
          element={<AlertMessagePage />}
        />
        <Route path="/components/dialog-message" element={<DialogPage />} />
        <Route path="/components/testimonials" element={<TestimonialPage />} />
        <Route path="/components/notification" element={<NotificationPage />} />

        {/* surface */}
        <Route path="/components/cards" element={<CardPage />} />
        <Route
          path="/components/image-gallery"
          element={<ImageGalleryPage />}
        />
        <Route path="/components/according" element={<AccordingPage />} />
        <Route path="/components/appbar" element={<AppbarPage />} />

        {/* data display */}
        <Route path="/components/badge" element={<BadgePage />} />
        <Route path="/components/tooltip" element={<TooltipPage />} />
      </Routes>
    </>
  );
};

export default App;
