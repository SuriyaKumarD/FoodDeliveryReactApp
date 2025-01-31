import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="p-2 m-3 border-1 bg-amber-100 drop-shadow-2xl rounded-lg font-sans">
      <div className="flex">
        <h1 className="font-bold text-3xl">{title}</h1>
        {isVisible ? (
          <button
            className="ml-1.5"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            hide
          </button>
        ) : (
          <button
            className="ml-1.5"
            onClick={() => {
              setIsVisible(true);
            }}
          >
            show
          </button>
        )}
      </div>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const About = () => {
  const [isSectionVisible, SetisSectionVisible] = useState("about");
  return (
    <div>
      <Section
        title={"About"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible={isSectionVisible === "about"}
        setIsVisible={(value) => {
          {
            value ? SetisSectionVisible("about") : SetisSectionVisible(false);
          }
        }}
      />
      <Section
        title={"Contact"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible={isSectionVisible === "Contact"}
        setIsVisible={(value) => {
          value ? SetisSectionVisible("Contact") : SetisSectionVisible(false);
        }}
      />
      <Section
        title={"Carreer"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible={isSectionVisible === "Carreer"}
        setIsVisible={(value) => {
          value ? SetisSectionVisible("Carreer") : SetisSectionVisible(false);
        }}
      />
      <Section
        title={"Achievements"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible={isSectionVisible === "Achievements"}
        setIsVisible={(value) => {
          value
            ? SetisSectionVisible("Achievements")
            : SetisSectionVisible(false);
        }}
      />
    </div>
  );
};

export default About;
