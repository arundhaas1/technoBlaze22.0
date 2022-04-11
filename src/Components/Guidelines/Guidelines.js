import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Guide from "./Guide";
import "./Guidelines.css";

function Guidelines() {
  return (
    <div className="guidelines">

      <Header />
      <h2 className="event__g">GUIDELINES FOR EVENTS</h2>
      <Guide
        t="POWERPOINT PRESENTATION"
        p1="A presentation created on software from Microsoft that allows users to add audio, visual and audio/visual features to a presentation"
        p2="2"
        p3="It has 2 rounds and 4 incharges"
        p4="Student need to explain about the prepared ppt"
      />
      <Guide
        t="POSTER PRESENTATION"
        p1="A usually large printed sheet that often contains pictures and is posted in a public place (as to promote something)"
        p2="2"
        p3="It may have 2 rounds and with 2 incharges"
        p4="Student need to explain about the prepared poster"
      />
      <Guide
        t="POTENTIAL PROFESSER"
        p1="create, improve and protect the environment in which we live"
        p2="1"
        p3="First round may seminor with common topics and Second round may seminor with given topics"
        p4="It has 4 incharges"
      />
      <Guide
        t="LOCALITY BOSS"
        p1="Planning, financing, and design, and continues until the asset is built and ready for use"
        p2="1"
        p3="First round may aptitude with civil related questions"
        p4="Second round may site clearance test"
      />
      <Guide
        t="EMERGING ENGINEER"
        p1="Practitioners of engineering, are professionals who invent, design, analyze, build and test machines"
        p2="1"
        p3="First round may aptitude and second round to take a set of questions"
        p4="Third round is group dicussion folled by final interview"
      />
      <Guide
        t="PRO ANALYSER"
        p1="he use of computer-based software to aid in design processes"
        p2="1"
        p3="First round may aptitude test of civil related questions"
        p4="Second round is the questions related with CAD design"
      />
      <Guide
        t="PRIME ARCHITECT"
        p1="Planning, financing, and design, and continues until the asset is built and ready for use"
        p2="1"
        p3="First round is paper craft "
        p4="Second round is craft of different things . It has 4 incharge"
      />
      <Guide
        t="PHOTOGRAPHY"
        p1="Photography is the art, application, and practice of creating durable images by recording light"
        p2="1"
        p3="Use your owm images,Don't use filter ."
        p4="Themes can be Crossing and joints,Retaing wall or landscapes "
      />
      <Guide
        t="MEME CREATION"
        p1="Avirally transmitted image embellished with text, usually sharing pointed commentary"
        p2="1"
        p3="The meme nust be related to civil engineering "
        p4="Don't use watermark or hd templates "
      />
      <Guide
        t="CONNECTION"
        p1="Copy that aims to tell your potential attendees what will be happening at the event"
        p2="1"
        p3="Event time be at 8pm everyday in our instagram page "
        p4="Civil related connection questions may asked"
      />
      <Footer />
    </div>
  );
}

export default Guidelines;
