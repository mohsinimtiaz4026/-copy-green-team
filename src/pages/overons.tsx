// mui
import { Box } from "@mui/material";
import { ReactElement } from "react";
// images
import Dust from "@/public/images/dust.png";
import Empty from "@/public/images/empty.png";
import Fixing from "@/public/images/fixing.png";
import Floor from "@/public/images/floor.png";
import GrassBall from "@/public/images/grassbol.png";
import GreenTree from "@/public/images/greentree.png";
// components
import InfoDivider from "@/components/Common/infodivider";
import InfoSec from "@/components/Common/infosec";
import SecDivider from "@/components/Common/secdivider";
import SliderComponent from "@/components/Common/slider";
import Layout from "@/components/Layout/layout";

export default function Overons() {
  return (
    <Box>
      <InfoDivider
        title={"De Green Team visie"}
        para={`Wij hebben een grote passie voor vloeren in combinatie 
                        met duurzaamheid. Van origine zijn wij houtbewerkers
                        en dit heeft zich uiteindelijk doorvertaald in de renovatie van vloeren. Het leveren van kwaliteit, enthousiasme voor ons vak en bovenal het overtreffen van verwachtingen is wat de cultuur en visie van Green Team
                        het beste omschrijft. Wij geven zowel om de mensen als
                        om het milieu en daarom blijven we voortdurend innoveren om hier onze bijdrage aan te kunnen leveren. En
                        misschien nog wel het belangrijkste: je kunt op Green 
                        Team vertrouwen, afspraak is afspraak.
                        `}
        imgSrc={GreenTree}
      />
      <InfoDivider
        title={"De Green Team visie"}
        para={`Onze missie is om zo duurzaam en groen mogelijk te 
                    werk te gaan. Bewust bezig zijn met een betere wereld, 
                    dat vinden we belangrijk. De planeet gaat elke dag een 
                    stapje achteruit, daarom is het belangrijker dan ooit om 
                    samen bij te dragen aan een beter leefklimaat. Laten we 
                    zuinig zijn op al het mooie hout dat moeder natuur ons 
                    heeft gegeven.
                        `}
        paraInfo={`Green Team geeft een houten vloer een tweede leven en 
                    op die manier kunnen we samen een ‘vloertje’ bijdragen 
                    aan een betere wereld. Er hoeven namelijk veel minder 
                    bomen gekapt te worden als een houten vloer wordt 
                    hergebruikt. Door een houten vloer circulair in te zetten 
                    kan gemiddeld 211 kg CO2 opgenomen blijven worden. 
                    Dit staat gelijk aan 1.788 km rijden met een gemiddelde 
                    auto! En niet geheel onbelangrijk, het hergebruiken van 
                    een vloer kost een stuk minder dan het aanschaffen van 
                    een nieuwe.
                `}
        imgSrc={GrassBall}
        height="300px"
        orders
      />
      <Box sx={{ padding: "0 0 80px 0" }}>
        <SliderComponent />
        <SliderComponent />
      </Box>
      <InfoDivider
        title={"Al meer dan 20 jaar ervaring"}
        para={`Bij Green Team zetten we ons al 20 jaar lang dag in dag 
                uit in om vloeren een tweede leven te geven. Met al onze 
                ervaring zijn wij dan ook dé specialist voor wat betreft 
                het renoveren van vloeren. Wij zijn uitgegroeid van een 
                eenmanszaak tot een volwaardig bedrijf met vestigingen door heel Nederland. 
                De groei van Green Team komt voort uit de gedachte dat er altijd 
                iets beter kan, wij willen ons graag onderscheiden van andere aanbieders 
                op de markt. Dit doen wij door continu in beweging te 
                blijven en te optimaliseren tijdens het volgen van onze 
                missie om de wereld een stukje groener en beter te 
                maken.
                `}
        imgSrc={Dust}
        height="300px"
      />
      <InfoDivider
        title={"Wij maken je parketvloer weer als nieuw"}
        para={`Zit jouw vloer onder de deukjes, krassen, vlekken of 
                    andere beschadigingen of ben je op zoek naar een 
                    nieuwe vloer? Dan is parketrenovatie misschien wel de 
                    oplossing. De ervaren parketteurs van Green Team 
                    kunnen door het vakkundig schuren van jouw vloer deze 
                    weer als nieuw maken. Met gebruik van professionele 
                    machines wordt de vloer volledig egaal geschuurd en er 
                    zal geen hoek of rand worden overgeslagen. Op deze 
                    manier is het helemaal niet meer nodig om een nieuwe 
                    vloer aan te schaffen, want jouw vloer krijgt zo een 
                    tweede leven! Dat draagt bij aan een beter leefklimaat 
                    en is een stuk goedkoper dan de aanschaf van een volledig nieuwe vloer.
                `}
        imgSrc={Floor}
        height="300px"
        orders
      />
      <SecDivider />
      <InfoDivider
        title={"Je vloer wordt stofvrij geschuurd"}
        para={`Ons team neemt alleen genoegen met het beste resultaat. Daarom werken wij bij Green Team met de meest 
                hoogwaardige en duurzame machines en producten en 
                hebben wij voor elke behandeling ook een passende machine en werkwijze. Maak je vooral geen zorgen over 
                troep of stof na het schuren, want al onze machines zijn 
                aangesloten op professionele stofzuigers. Op deze 
                manier wordt jouw vloer geheel stofvrij geschuurd.
                `}
        imgSrc={Fixing}
      />
      <InfoDivider
        title={"Behandelingen op maat"}
        para={`OEr zijn verschillende mogelijkheden voor de afwerking 
                    van een vloer na het schuren. Wij zorgen altijd voor de behandeling die het beste past bij de vloer en aansluit op 
                    jouw wensen. Er is keuze uit lak, olie of hardwax in verschillende kleuren. Hierbij zullen de gepassioneerde vakmannen van Green Team je altijd adviseren voor het 
                    maken van de beste keuze.
                `}
        imgSrc={Empty}
        orders
      />
      <InfoSec />
    </Box>
  );
}
Overons.getLayout = (Page: ReactElement) => <Layout>{Page}</Layout>;
