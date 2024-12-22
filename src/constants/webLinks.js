import { github, linkedin, code_tag, facebook } from "../assets";

export const socialLink = (icon) => {
  icon === github
    ? window.open("https://github.com/saifyeddes", "_blank")
    : icon === linkedin
    ? window.open("https://www.linkedin.com/in/saif-eddine-yedes/", "_blank")
    : icon === code_tag
    ? window.open(
        "https://developers.google.com/profile/u/SaifEddineYedes?hl=fr",
        "_blank"
      )
    : icon === facebook
    ? window.open("https://www.facebook.com/weld.esperense.1/", "_blank")
    : null;
};

export const stringUrl = (text) => {
  text === "@PoemGroup"
    ? window.open("https://www.poem-group.com/", "_blank")
    : text === "@DpointGroup"
    ? window.open(
        "https://www.linkedin.com/company/dpointgroup/posts/?feedView=all",
        "_blank"
      )
    : text === "@Designet"
    ? window.open("https://www.facebook.com/cfd.designet/", "_blank")
    : text === "@Google Developer Groups - Béja"
    ? window.open("https://www.linkedin.com/company/gdg-beja/", "_blank")
    : text === "@GO MY CODE Center ( 1 months )"
    ? window.open("https://gomycode.com/tn/", "_blank")
    : text === "@PoemGroup"
    ? window.open("https://www.poem-group.com/", "_blank")
    : null;
};

export const CertificationLink = (idx) => {
  idx === 0
    ? window.open(
        "https://drive.google.com/drive/folders/175WlR44JTPSMr4Xgvq0HlwRi1ryBAAec?usp=sharing",
        "_blank"
      )
    : idx === 1
    ? window.open(
        "https://www.udemy.com/certificate/UC-e4f81061-f43f-4c13-b61f-d6822a1d5c0f/",
        "_blank"
      )
    : idx === 2
    ? window.open(
        "https://drive.google.com/file/d/1fXrrKQT9JJHLzNgilCFORaDK-ctLHuvF/view",
        "_blank"
      )
    : idx === 3
    ? window.open(
        "https://www.udemy.com/certificate/UC-363d85db-d5e7-49e4-942b-7440887b5b46/",
        "_blank"
      )
    : idx === 4
    ? window.open(
        "https://www.udemy.com/certificate/UC-26d753fa-c9e8-4b96-a811-e5725ab7a320/",
        "_blank"
      )
    : idx === 5
    ? window.open("https://www.facebook.com/scouts.korba", "_blank")
    : idx === 6
    ? window.open("https://www.facebook.com/cine.club.isims", "_blank")
    : idx === 7
    ? window.open("https://aiesec.org/", "_blank")
    : null;
};

export const credlyLinks = (idx) => {
  const links = [
    "https://www.credly.com/badges/d0c29710-03ed-45ae-b0d0-ef64c4cd6110/public_url",
    "https://www.credly.com/badges/f25049b5-4ad3-4d0b-b104-9adb870d6ec9/public_url",
    "https://www.credly.com/badges/f7836436-9e21-408a-a55d-23c494b3441a/public_url",
  ];

  if (links[idx]) {
    window.open(links[idx], "_blank");
  } else {
    console.error("Invalid index for credly link");
  }
};
