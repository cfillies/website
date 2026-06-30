import React from 'react';
import {
  Badge,
  Button,
  Card,
  Subtitle1,
  Text,
  Title1,
  Title2
} from '@fluentui/react-components';
import {
  ArrowRight24Regular,
  BookOpen24Regular,
  Building24Regular,
  CheckmarkCircle24Regular,
  Database24Regular,
  Globe24Regular,
  Lightbulb24Regular,
  Microscope24Regular,
  ShieldCheckmark24Regular,
  Sparkle24Regular,
  Bot24Regular,
  Flow24Regular
} from '@fluentui/react-icons';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Foo from './Foo';
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ValueBand from "./Components/ValueBand";
import UseCasesSection from "./Components/UseCasesSection";
import LogoBand from "./Components/LogoBand";
import ThreeColumnSection from "./Components/ThreeColumnSection";
import CTASection from "./Components/CTASection";
import Footer from "./Components/Footer";

// Unterseiten (du legst sie gleich an)
import Prozessmanagement from "./Pages/Prozessmanagement";
import Unternehmenswissen from "./Pages/Unternehmenswissen";
import KIAgenten from "./Pages/KIAgenten";
import Microsoft365 from "./Pages/Microsoft365";
import Branchen from "./Pages/Branchen";
import Ressourcen from "./Pages/Ressourcen";
import UeberUns from "./Pages/UeberUns";


// Datentypen
type NavItem = {
  label: string;
};

type Benefit = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

type UseCase = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

type Resource = {
  kind: string;
  title: string;
  date: string;
};


// Navigationseinträge
export const navItems: NavItem[] = [
  { label: 'Prozessmanagement' },
  { label: 'Unternehmenswissen' },
  { label: 'KI-Agenten' },
  { label: 'Microsoft 365' },
  { label: 'Branchen' },
  { label: 'Ressourcen' },
  { label: 'Über uns' }
];


// Benefits
export const benefits: Benefit[] = [
  {
    icon: <Flow24Regular />,
    title: 'Prozesse im Mittelpunkt',
    text: 'Modellieren Sie Abläufe konsistent und verbinden Sie sie mit Wissen, Rollen und Daten.'
  },
  {
    icon: <BookOpen24Regular />,
    title: 'Wissen strukturieren',
    text: 'Machen Sie Begriffe, Regeln und Informationen auffindbar und für Teams nutzbar.'
  },
  {
    icon: <Bot24Regular />,
    title: 'KI-Agenten kontextualisieren',
    text: 'Geben Sie Assistenten und Automatisierungen den richtigen fachlichen Kontext.'
  },
  {
    icon: <ShieldCheckmark24Regular />,
    title: 'Governance und Compliance',
    text: 'Schaffen Sie Transparenz, Nachvollziehbarkeit und auditierbare Strukturen.'
  },
  {
    icon: <Database24Regular />,
    title: 'Mit Systemen verbinden',
    text: 'Verknüpfen Sie Microsoft 365, Fachanwendungen und Unternehmensdaten.'
  }
];


// Use Cases
export const useCases: UseCase[] = [
  {
    icon: <Flow24Regular />,
    title: 'Prozessmanagement',
    text: 'Modellieren, analysieren und verbessern Sie Geschäftsprozesse mit einer klaren Wissensbasis.'
  },
  {
    icon: <Building24Regular />,
    title: 'Enterprise Architecture',
    text: 'Verknüpfen Sie Prozesse, Anwendungen und Informationen in einem konsistenten Bild.'
  },
  {
    icon: <BookOpen24Regular />,
    title: 'Wissensmanagement',
    text: 'Zentralisieren Sie Unternehmenswissen, Dokumente und Begriffe für bessere Auffindbarkeit.'
  },
  {
    icon: <Bot24Regular />,
    title: 'KI & Automatisierung',
    text: 'Ermöglichen Sie intelligente Workflows, RAG-Szenarien und assistierte Arbeit.'
  },
  {
    icon: <ShieldCheckmark24Regular />,
    title: 'Compliance & Risiko',
    text: 'Unterstützen Sie regulierte Abläufe mit klaren Verantwortlichkeiten und Nachweisen.'
  }
];


// Ressourcen
export const resources: Resource[] = [
  {
    kind: 'Blog',
    title: 'Prozessmodelle als Kontext für KI-Agenten',
    date: '15. Mai 2024'
  },
  {
    kind: 'Webinar',
    title: 'SemTalk und Microsoft 365: Das perfekte Zusammenspiel',
    date: '5. Juni 2024'
  },
  {
    kind: 'Whitepaper',
    title: 'Semantische Modellierung: Der Schlüssel für Enterprise AI',
    date: '22. April 2024'
  }
];


// App-Komponente
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="semtalk-page">
          <Header />

          <main>
            <Routes>

              {/* Startseite */}
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <ValueBand />
                    <UseCasesSection />
                    <LogoBand />
                    <ThreeColumnSection />
                    <CTASection />
                  </>
                }
              />

              {/* Unterseiten */}
              <Route path="/prozessmanagement" element={<Prozessmanagement />} />
              <Route path="/unternehmenswissen" element={<Unternehmenswissen />} />
              <Route path="/ki-agenten" element={<KIAgenten />} />
              <Route path="/microsoft-365" element={<Microsoft365 />} />
              <Route path="/branchen" element={<Branchen />} />
              <Route path="/ressourcen" element={<Ressourcen />} />
              <Route path="/ueber-uns" element={<UeberUns />} />

            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
