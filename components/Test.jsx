"use client";
import React from "react";
import { motion } from "framer-motion";
const Test = () => {
  return (
    <section className="mt-20 flex flex-col gap-3 text-center p-8">
      <p className="text-center">We take Privacy seriously</p>
      <p className="font-bold text-3xl">Before you get started</p>
      <p className="text-xl font-normal">
      &quot;We Wont share your answers with anyone.
        <br /> (and wont tell you which friends said what about you).&quot;
      </p>
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="">Made with Love...</p>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="170"
          variants={{
            initial: {
              opacity: 0,
              x: -10,
            },
            animate: {
              opacity: [0,0,0,0.5,1],
              x: [0,0,2.5,3,2.7,0],
              transition: {
                duration: 1.3},
            },
          }}
          height="70"
          initial="initial"
          animate="animate"
          viewBox="0 0 450 150"
        >
          <path
            id="Path_1"
            data-name="Path 1"
            d="M3.2-.748A3.39,3.39,0,0,0,4.488-.816,3.55,3.55,0,0,0,5.3-1.224a4.993,4.993,0,0,0,2.924-1.5,85.057,85.057,0,0,0,8.432-8.84,99.683,99.683,0,0,0,6.6-8.568c.408-.544.612-.748.816-.544a4.994,4.994,0,0,0,2.176,1.02c.68.136.952,0,.952-.476a.374.374,0,0,0-.2-.34,1.93,1.93,0,0,1-.884-1.428q-.1-1.326,1.836-4.08c.272-.272-1.224-1.564-1.632-1.36-.612.34-1.5,1.02-2.788,1.972-.612,1.7-.748,2.992-1.02,3.4-2.244,3.128-4.488,6.256-6.8,9.384C12.24-7.956,9.656-4.76,7.752-3.2a3.009,3.009,0,0,1-1.7.816c-.68,0-1.02-.544-1.02-1.5a5.994,5.994,0,0,1,.2-1.428c1.02-3.672,3.6-8.772,7.684-15.232.068-.2.2-.34.2-.476,0-.612-.408-.884-1.088-.884a.788.788,0,0,0-.68.272C5.78-13.94,2.38-7.548,1.224-2.448.952-1.768,2.108-.816,3.2-.748ZM54.672-18.9c.476-.612-.068-.884-.476-.272a10.73,10.73,0,0,1-5.168,2.38c-2.924.34-8.432.34-13.4.34,4.488-.68,8.3-2.516,9.724-5.032,1.5-2.652-.68-7.344-4.08-6.052-6.324,2.38-17.136,13.4-17.612,23.324-.136,3.536,4.08,6.664,6.8,6.188C33.8,1.36,37.672-.952,39.576-2.312c.748-.544.2-.884-.544-.476A26.43,26.43,0,0,1,29.852.476C27.54.748,25.092-.2,25.3-4.216c.272-4.284,3.06-8.364,5.1-11.084,5.44,0,15.572,0,18.632-.476A10.541,10.541,0,0,0,54.672-18.9ZM43.724-22.1c-2.176,3.264-7.82,5.644-12.58,5.644,3.06-3.332,6.664-6.732,10-8.636C43.86-26.588,45.628-25.024,43.724-22.1ZM42.092.884A19.894,19.894,0,0,1,44.88-.476c.408-.2.544-.408.544-.476,5.3-8.7,11.288-14.824,17.952-18.5,1.564-.816,2.72-1.02,3.672-.612.544.34,1.972-1.156,1.972-1.768,0-.068,0-.068-.068-.136a6.538,6.538,0,0,0-3.128-.408,31.254,31.254,0,0,0-6.8,4.556,49.787,49.787,0,0,0-6.868,6.6,1.9,1.9,0,0,1-.816.544c-.544.2-.748.136-.748-.068a1.52,1.52,0,0,1,.2-.68,77.085,77.085,0,0,1,5.984-8.908.618.618,0,0,0,.068-.748.538.538,0,0,0-.544-.34.271.271,0,0,0-.272.136,56.829,56.829,0,0,1-5.1,2.856.575.575,0,0,0,0,.476,3.093,3.093,0,0,1,.2.748,4.68,4.68,0,0,1-.408,1.7A114.328,114.328,0,0,1,41.752.2a.823.823,0,0,0-.068.68Q41.786,1.292,42.092.884Zm23.6.272C69.7.612,74.324-2.04,79.628-6.6c5.372-4.624,8.024-8.568,8.3-11.968a4.181,4.181,0,0,0-.2-.748.433.433,0,0,1,0-.408c.408-.544,1.292-.816,2.72-.816.68,0,1.02-.2,1.02-.408,0-.136-.34-.272-1.02-.272-3.808-.136-6.8-.2-8.84-.272a2.957,2.957,0,0,1-.476-.272,6.407,6.407,0,0,0-3.06-1.224,4.831,4.831,0,0,0-2.992,1.5,1.652,1.652,0,0,1-.748.272,18.582,18.582,0,0,0-2.584.068c-2.108.068-1.972.68-1.972.952,0,.544,1.02,1.156,1.836,1.632.2.068.272.34.136.612C65.688-10.54,62.7-4.964,62.628-1.292A2.849,2.849,0,0,0,65.688,1.156Zm-.952-3.6a46.493,46.493,0,0,1,11.22-16.116c.612-.408,1.02-.68,1.156-.612a11.878,11.878,0,0,1,5.712-.612c1.972.2,2.924.952,2.584,2.38-.68,3.264-3.264,6.936-7.82,11.016C73.236-2.38,69.564-.2,66.5.272,65.076.544,64.328.136,64.328-.952A3.1,3.1,0,0,1,64.736-2.448Zm21.488.816c1.836-.408,2.992-.884,3.468-1.5a88.331,88.331,0,0,1,15.572-14.756,2.055,2.055,0,0,1,1.088-.34c.816,0,1.224.34,1.224,1.088a1.312,1.312,0,0,1-.2.68,82.391,82.391,0,0,0-7,11.628C97.852.136,96.356,4.284,96.084,7.48c-.2,2.856.272,4.964,1.564,6.392a5.233,5.233,0,0,0,4.488,1.5c5.032-.544,9.724-2.924,14.144-7.276,3.2-3.2,5.3-6.052,6.12-8.7a6.741,6.741,0,0,0,.408-1.972c0-1.02-.408-1.564-1.156-1.564-.612,0-1.632.408-1.632.952,0,.476,2.04-.2,2.04,1.7,0,2.244-2.176,5.168-6.46,8.84-3.876,3.264-7.14,5.3-9.724,6.052a6.574,6.574,0,0,1-1.972.272,4.821,4.821,0,0,1-3.74-1.5,6.232,6.232,0,0,1-1.292-4.828c.272-3.2,1.564-7.48,4.012-12.784a75.34,75.34,0,0,1,8.7-14.28c.68-.816.68-1.36.068-1.564a2.828,2.828,0,0,0-2.38.272,5.154,5.154,0,0,0-1.7,1.088c-1.088.408-3.4,1.972-6.868,4.76C97.784-12.784,95-10.4,92.48-7.956a1.16,1.16,0,0,1-.816.476c-.34,0-.544-.2-.544-.748a1.5,1.5,0,0,1,.272-.884A47.993,47.993,0,0,1,99.076-21.08a.735.735,0,0,0,.2-.476c-.068-.068-.2-.068-.476,0a2.239,2.239,0,0,0-1.7.884c-1.768,2.176-3.876,5.032-6.256,8.636a79.848,79.848,0,0,0-5.3,9.044c-.272.544-.34.884-.136,1.088C85.476-1.632,85.748-1.564,86.224-1.632ZM125.12-5.3c1.02-1.02,1.156-2.38-.408-.816a17.665,17.665,0,0,1-8.3,4.828c-1.768.408-4.42.408-2.176-4.148,3.264-6.732-1.7,2.584,7.548-14.892,1.768-3.332-2.312-3.876-2.652-1.7-.2,1.156-7.344,14.008-7.412,18.428-.068,3.332,4.08,4.556,5.1,4.08A25.378,25.378,0,0,0,125.12-5.3Zm1.156-24.548c.272-.816-.884-1.836-1.836-1.632a5.572,5.572,0,0,0-2.516,1.836c-1.088,1.088-1.564,1.9-1.564,2.516,0,.544.476.952,1.5,1.156.68.136,1.5-.272,2.516-1.224A5.251,5.251,0,0,0,126.276-29.852Zm19.176,8.5c2.652-3.74-.544-6.732-4.012-5.644-6.46,1.972-17.2,13.056-17.68,22.916-.2,3.6,4.148,6.664,6.8,6.188,3.4-.612,7.208-2.924,9.112-4.284.748-.544.272-.952-.476-.476A27.289,27.289,0,0,1,129.948.612c-2.312.2-4.828-.68-4.556-4.692.272-4.284,3.06-8.3,5.1-11.084l.816-1.088c3.06-3.4,6.6-6.8,9.928-8.7,2.72-1.5,4.828.34,2.584,2.992C142.052-19.924,144.432-19.924,145.452-21.352ZM143.14-.884a75.452,75.452,0,0,0,10.268-7.548,83.623,83.623,0,0,0,9.18-8.908c.068-.068.136-.136.2-.136.408,0,.408.2.068.748A59.617,59.617,0,0,0,158.3-8.3c-2.448,5.372-5.44,15.1-5.576,18.9-.068,2.312.544,4.216,2.244,5.3a10.343,10.343,0,0,0,5.44,1.768,12.3,12.3,0,0,0,3.944-.68c2.516-.884,5.576-2.924,9.316-5.984A49.1,49.1,0,0,0,182.716.952,1.433,1.433,0,0,0,182.988.2a.25.25,0,0,0-.068-.2c-.2,0-.408.2-.816.68a57.556,57.556,0,0,1-8.84,9.112c-3.808,3.06-6.936,5.032-9.384,5.848a15,15,0,0,1-4.828.816c-3.264,0-5.3-1.5-5.3-4.556a8.671,8.671,0,0,1,.068-1.292,80.132,80.132,0,0,1,8.3-22.576c2.448-4.012,5.1-8.024,7.684-12.036.068-.2-.272-.816-.612-.816a.729.729,0,0,0-.408.136,2.932,2.932,0,0,1-1.768.884,4.666,4.666,0,0,1-1.292-.068,11.061,11.061,0,0,0-3.264-.612,7.276,7.276,0,0,0-2.788.544c-3.536,1.36-7.616,4.284-12.24,8.84-5.032,5.032-7.548,9.18-7.548,12.376,0,1.632.544,2.38,1.7,2.38A2.9,2.9,0,0,0,143.14-.884Zm1.088-5.78a36.826,36.826,0,0,1,6.46-9.52c3.2-3.536,5.916-5.644,8.092-6.188a6.174,6.174,0,0,1,1.564-.2c1.836,0,3.128,1.02,3.128,2.04a.617.617,0,0,1-.2.476C156.876-12.444,151.232-7,146.2-3.808a2.255,2.255,0,0,1-1.02.34c-.816,0-1.224-.476-1.224-1.632A4.462,4.462,0,0,1,144.228-6.664ZM186.116.884A19.9,19.9,0,0,1,188.9-.476c.408-.2.544-.408.544-.476,5.3-8.7,11.288-14.824,17.952-18.5,1.564-.816,2.72-1.02,3.672-.612.544.34,1.972-1.156,1.972-1.768,0-.068,0-.068-.068-.136a6.538,6.538,0,0,0-3.128-.408,31.254,31.254,0,0,0-6.8,4.556,49.787,49.787,0,0,0-6.868,6.6,1.9,1.9,0,0,1-.816.544c-.544.2-.748.136-.748-.068a1.52,1.52,0,0,1,.2-.68,77.086,77.086,0,0,1,5.984-8.908.618.618,0,0,0,.068-.748.538.538,0,0,0-.544-.34.271.271,0,0,0-.272.136,56.827,56.827,0,0,1-5.1,2.856.575.575,0,0,0,0,.476,3.093,3.093,0,0,1,.2.748,4.68,4.68,0,0,1-.408,1.7A114.33,114.33,0,0,1,185.776.2a.823.823,0,0,0-.068.68Q185.81,1.292,186.116.884Zm23.6.272c4.012-.544,8.636-3.2,13.94-7.752,5.372-4.624,8.024-8.568,8.3-11.968a4.182,4.182,0,0,0-.2-.748.433.433,0,0,1,0-.408c.408-.544,1.292-.816,2.72-.816.68,0,1.02-.2,1.02-.408,0-.136-.34-.272-1.02-.272-3.808-.136-6.8-.2-8.84-.272a2.957,2.957,0,0,1-.476-.272,6.407,6.407,0,0,0-3.06-1.224,4.831,4.831,0,0,0-2.992,1.5,1.652,1.652,0,0,1-.748.272,18.582,18.582,0,0,0-2.584.068c-2.108.068-1.972.68-1.972.952,0,.544,1.02,1.156,1.836,1.632.2.068.272.34.136.612-6.052,7.412-9.044,12.988-9.112,16.66A2.849,2.849,0,0,0,209.712,1.156Zm-.952-3.6a46.494,46.494,0,0,1,11.22-16.116c.612-.408,1.02-.68,1.156-.612a11.878,11.878,0,0,1,5.712-.612c1.972.2,2.924.952,2.584,2.38-.68,3.264-3.264,6.936-7.82,11.016C217.26-2.38,213.588-.2,210.528.272c-1.428.272-2.176-.136-2.176-1.224A3.1,3.1,0,0,1,208.76-2.448ZM256.9-23.12a15.67,15.67,0,0,0-3.74-.68,7.276,7.276,0,0,0-2.788.544c-3.4,1.292-7.48,4.284-12.308,8.84-5.372,5.1-8.024,9.112-8.024,12.172,0,1.564.816,2.312,2.516,2.312a2.012,2.012,0,0,0,.68-.136c2.856-1.156,6.6-3.876,11.152-7.956a86.414,86.414,0,0,0,9.384-9.724.492.492,0,0,1,.408-.272c.544,0,.612.34.34,1.156-2.652,7-3.944,11.7-3.944,14.348A5.888,5.888,0,0,0,251.4.612a1.158,1.158,0,0,0,1.5.408.943.943,0,0,0,.544-.476C253.572.2,253.5.068,253.3,0c-.476-.068-.816-.136-1.156-.2-.272-.34-.408-.544-.408-.748-.068-4.828,2.04-11.288,6.324-19.584,1.972-3.876,4.012-7.412,5.984-10.88,1.5.068,3.06.068,4.76.068,17.476,0,35.36-4.284,53.516-12.784a29.684,29.684,0,0,0,11.22-8.432,15.363,15.363,0,0,0,3.468-9.52,14.517,14.517,0,0,0-5.576-11.356,22.132,22.132,0,0,0-14.552-4.9,32.6,32.6,0,0,0-10.54,1.9C295.664-72.692,285.192-64.26,274.856-51c-2.04,2.584-4.352,5.848-6.936,9.724h-.136c-4.42.952-7.752,2.584-10,5.032a1.523,1.523,0,0,0-.476,1.156c0,1.428,1.224,3.06,2.448,3.2a9.835,9.835,0,0,0,2.04.34C260.236-28.968,258.6-26.112,256.9-23.12Zm49.844-52.5a25.1,25.1,0,0,1,9.724-1.972,22.757,22.757,0,0,1,13.328,4.08q5.712,3.978,5.712,9.792c0,6.052-4.692,11.832-14.144,17.272a102.942,102.942,0,0,1-52.7,14.144c-1.5,0-2.788,0-4.012-.068C278.052-55.012,292.06-69.36,306.748-75.616ZM234.4-5.916a31.876,31.876,0,0,1,7-9.588c3.536-3.468,6.324-5.576,8.7-6.12a8.307,8.307,0,0,1,1.768-.2c1.632,0,2.448.544,2.448,1.564A2.925,2.925,0,0,1,253.5-18.5,81.943,81.943,0,0,1,236.3-3.264a2.257,2.257,0,0,1-1.088.34c-.748,0-1.156-.544-1.156-1.5A3.979,3.979,0,0,1,234.4-5.916Zm25.5-27c-1.02-.136-1.5-.612-1.5-1.36a1.746,1.746,0,0,1,.476-1.224,16.756,16.756,0,0,1,8.636-5.1c-1.564,2.448-3.2,5.168-5.032,8.024A24.022,24.022,0,0,1,259.9-32.912ZM255.748.884a19.9,19.9,0,0,1,2.788-1.36c.408-.2.544-.408.544-.476,5.3-8.7,11.288-14.824,17.952-18.5,1.564-.816,2.72-1.02,3.672-.612.544.34,1.972-1.156,1.972-1.768,0-.068,0-.068-.068-.136a6.538,6.538,0,0,0-3.128-.408,31.254,31.254,0,0,0-6.8,4.556,49.787,49.787,0,0,0-6.868,6.6,1.9,1.9,0,0,1-.816.544c-.544.2-.748.136-.748-.068a1.52,1.52,0,0,1,.2-.68,77.085,77.085,0,0,1,5.984-8.908.618.618,0,0,0,.068-.748.538.538,0,0,0-.544-.34.271.271,0,0,0-.272.136,56.825,56.825,0,0,1-5.1,2.856.575.575,0,0,0,0,.476,3.093,3.093,0,0,1,.2.748,4.68,4.68,0,0,1-.408,1.7A114.326,114.326,0,0,1,255.408.2a.823.823,0,0,0-.068.68Q255.442,1.292,255.748.884ZM291.516-5.3c1.02-1.02,1.156-2.38-.408-.816a17.665,17.665,0,0,1-8.3,4.828c-1.768.408-4.42.408-2.176-4.148,3.264-6.732-1.7,2.584,7.548-14.892,1.768-3.332-2.312-3.876-2.652-1.7-.2,1.156-7.344,14.008-7.412,18.428-.068,3.332,4.08,4.556,5.1,4.08A25.378,25.378,0,0,0,291.516-5.3Zm1.156-24.548c.272-.816-.884-1.836-1.836-1.632a5.572,5.572,0,0,0-2.516,1.836c-1.088,1.088-1.564,1.9-1.564,2.516,0,.544.476.952,1.5,1.156.68.136,1.5-.272,2.516-1.224A5.251,5.251,0,0,0,292.672-29.852Zm22.236,10.336q-6.936-.1-14.892,4.9c-5.236,3.332-8.976,7.14-11.152,11.56a4.362,4.362,0,0,0-.612,2.108A2.164,2.164,0,0,0,290.7,1.5a3.681,3.681,0,0,0,1.292-.2,73.052,73.052,0,0,0,11.56-7.072,92.865,92.865,0,0,0,8.364-6.324c-.34,1.088-.612,2.38-1.088,3.944a89.993,89.993,0,0,1-3.672,11.084,214.628,214.628,0,0,0-39.032,11.288C249.9,21.42,239.02,29.036,235.552,37.2a13.2,13.2,0,0,0-1.088,5.1c0,5.372,2.788,10.2,8.228,14.484A25.6,25.6,0,0,0,260.644,62.7c19.108-1.156,35.224-20.876,48.62-59.024C314.5,2.516,321.232,2.04,329.392,2.04c2.108,0,3.74.068,5.032.136,2.244.2,3.332,1.088,3.332,2.72,0,1.972-1.292,4.216-4.012,6.732-.476.34-.68.612-.68.884,0,.068.068.068.136.068.272,0,.544-.136,1.02-.544a17.448,17.448,0,0,0,4.42-4.488,3.462,3.462,0,0,0,.34-1.5c0-2.312-2.38-4.624-4.42-5.032a32.406,32.406,0,0,0-5.168-.34A113.706,113.706,0,0,0,309.74,2.516c2.788-8.092,4.828-14.348,6.256-18.632a3.428,3.428,0,0,0,.748-1.632,2.034,2.034,0,0,0-1.428-1.632A.729.729,0,0,0,314.908-19.516ZM237.184,39.032q4.488-11.322,26.724-21.556c12.376-5.712,26.724-10.132,42.976-13.532a150.709,150.709,0,0,1-15.1,32.912Q277,60.826,260.508,61.472a25.445,25.445,0,0,1-17-5.372c-4.76-3.672-7.14-7.956-7.14-12.716A12.045,12.045,0,0,1,237.184,39.032ZM310.76-12.376c-1.9,1.564-4.624,3.74-8.3,6.392C297.908-2.72,295.052-1.02,294.1-1.02c-1.156,0-1.632-.748-1.632-2.176a5.95,5.95,0,0,1,.136-1.088c.952-2.856,3.128-5.576,6.6-8.3a25.736,25.736,0,0,1,9.86-4.9,7.423,7.423,0,0,1,3.128-.34c.34.068.476.476.476,1.292a.409.409,0,0,0-.068.272c0,.068.068.068.068.136A5.287,5.287,0,0,1,310.76-12.376Zm36.924-7.82c.612-.884-.272-4.148-1.972-2.584C340.2-17.952,331.16-6.8,324.02-2.516c-2.244,1.292-3.672.272-2.584-3.4,1.36-4.828,7.072-13.736,11.152-18.836,1.7-2.108-.884-2.312-1.836-1.224-3.4,4.012-11.968,16.116-12.444,22.508C318.172-1.224,319.872.816,322.32,0c2.856-.952,13.4-11.152,17.816-15.5,1.632-1.632,2.176-.272,1.632,1.088-1.292,3.06-3.2,7.14-3.2,10.676,0,1.768,2.244,3.74,3.4,3.4a57.8,57.8,0,0,0,8.16-5.576c1.088-1.088.952-2.108-.476-1.156-.544.34-6.256,4.284-6.868,4.488-1.292.34-2.856.884-2.312-2.38C341.088-8.636,345.168-16.388,347.684-20.2Zm32.64,1.292c.476-.612-.068-.884-.476-.272a10.731,10.731,0,0,1-5.168,2.38c-2.924.34-8.432.34-13.4.34,4.488-.68,8.3-2.516,9.724-5.032,1.5-2.652-.68-7.344-4.08-6.052-6.324,2.38-17.136,13.4-17.612,23.324-.136,3.536,4.08,6.664,6.8,6.188,3.332-.612,7.208-2.924,9.112-4.284.748-.544.2-.884-.544-.476A26.43,26.43,0,0,1,355.5.476c-2.312.272-4.76-.68-4.556-4.692.272-4.284,3.06-8.364,5.1-11.084,5.44,0,15.572,0,18.632-.476A10.541,10.541,0,0,0,380.324-18.9Zm-10.948-3.2c-2.176,3.264-7.82,5.644-12.58,5.644,3.06-3.332,6.664-6.732,10-8.636C369.512-26.588,371.28-25.024,369.376-22.1ZM379.3-8.024c-.544.068-.476-.816-.2-1.02,1.5-2.244,6.392-8.364,6.8-12.308.2-1.9-1.292-4.42-2.584-4.148-2.584.544-6.664,6.12-7.888,7.888-.408.68-.408,1.9.34.884,1.564-2.108,4.556-5.848,6.324-6.46.884-.136,1.7.884,1.224,2.924-.816,3.672-5.508,11.288-7.344,13.124-.68.748-.2,1.564.272,1.36,1.292-.272,3.06.136,3.536,1.564l-.748.2c-13.124,3.6-26.18,6.392-38.42,11.22-18.292,7.276-29.1,14.824-32.64,22.984a13.049,13.049,0,0,0-1.02,5.032c0,5.44,2.788,10.268,8.228,14.552a25.4,25.4,0,0,0,17.952,5.916q28.56-1.734,48.62-59.024c5.236-1.156,11.968-1.632,20.128-1.632,2.108,0,3.74.068,5.032.136,2.244.2,3.332,1.088,3.332,2.652,0,2.04-1.36,4.284-4.012,6.732-.476.408-.68.68-.68.952,0,.068.068.068.136.068a1.531,1.531,0,0,0,.952-.544A17.448,17.448,0,0,0,411.06.544a3.773,3.773,0,0,0,.408-1.5c0-2.312-2.448-4.624-4.42-5.032a32.406,32.406,0,0,0-5.168-.34A114.459,114.459,0,0,0,382.024-4.76a2.911,2.911,0,0,0-.476-1.428A6.471,6.471,0,0,0,379.3-8.024ZM309.6,32.028c2.924-7.548,11.9-14.756,26.724-21.556Q354.994,2.006,379.372-3.06a155.629,155.629,0,0,1-15.164,32.912C354.28,45.832,343.944,54.06,333,54.468A25.693,25.693,0,0,1,316,49.1c-4.76-3.672-7.208-7.956-7.208-12.716A12.046,12.046,0,0,1,309.6,32.028Z"
            transform="translate(-0.672 78.836)"
            fill="none"
            stroke="#f68819"
            strokeWidth="1"
          />
        </motion.svg>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { y: "10%" },
          visible: {
            y: 0,
            transition: { ease: "easeInOut", duration: 1, delayChildren: 0.7 },
          },
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: {
              opacity: 1,
              scale: [0,0.25,0.5,0.8,1.01,1],
              transition: { ease: "easeInOut", duration: 1 },
            },
          }}
          style={{
            width: "100%", // Adjust the width as needed
            overflow: "hidden", // Hide overflowing text while sliding
          }}
          className="pt-3"
        >
          <button className="rounded-3xl p-4 px-6 text-white bg-black">
            Start Test
          </button>
        </motion.div>
        <div className="text-sm mt-4">Take only 5 minutes</div>
      </motion.div>
    </section>
  );
};

export default Test;
