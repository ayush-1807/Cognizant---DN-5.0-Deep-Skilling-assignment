import React from "react";

const IndianTeam = [
  "Sachin",
  "Dhoni",
  "Virat",
  "Rohit",
  "Raina",
  "Yuvraj"
];

const T20Players = ["First Player", "Second Player", "Third Player"];
const RanjiPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];

const IndianPlayers = [...T20Players, ...RanjiPlayers];

export default function IndianPlayer() {
  const [first, second, third, fourth, fifth, sixth] = IndianTeam;

  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>

      <hr />

      <h2>Even Players</h2>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>

      <hr />

      <h2>List of Indian Players Merged</h2>
      <ul>
        {IndianPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}