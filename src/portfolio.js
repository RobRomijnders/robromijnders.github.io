/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Rob Romijnders",
  title: "",
  subTitle:
    "Machine learning researcher. Interested in representation learning, out-of-distribution generalization and Bayesian learning.",
  resumeLink:
    "https://drive.google.com/file/d/1oEDtGJV20jCI5olcyMA21P_kS5rl0jFB/view?usp=sharing",
  googleScholarLink: "https://scholar.google.com/citations?user=P1kN6KEAAAAJ",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/RobRomijnders",
  linkedin: "https://www.linkedin.com/in/robromijnders/",
  gmail: "romijndersrob@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/6104317/rob-romijnders",
  // Instagram and Twitter are also supported in the links!
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI resident",
      company: "Google",
      companylogo: require("./assets/images/google_logo.png"),
      date: "October 2019 – Present",
      desc:
        "Research focusing on representation learning and robustness of image classification",
      descBullets: [
        "Mentored by Mario Lucic and Neil Houlsby.",
        "Resulted in two publications.",
      ],
    },
    {
      role: "Machine learning engineer",
      company: "Frosha.io",
      companylogo: require("./assets/images/frosha_logo.png"),
      date: "October 2016 - July 2019",
      desc: "Entity resolution in large CRM systems",
      descBullets: [
        "Startup, employee #1",
        "Worked on Text parsing using Maximum likelihood in RNN models",
      ],
    },
    {
      role: "MSc student",
      company: "Eindhoven University - Mobile Perception systems",
      companylogo: require("./assets/images/tue_whiten.png"),
      date: "Sep 2018 - July 2019",
      desc: "Thesis on Domain Adaptation for Computer Vision models",
      descBullets: [
        "Supervised by dr. Gijs Dubbelman and Panos Meletis",
        "Resulted in Conference poster for IEEE WACV",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "robromijnders", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "True", // Set true or false to show Contact profile using Github, defaults to false
};

// Your Achievement Section Include Your Certification Talks and More

const publicationsSection = {
  title: "Academic publications ",
  subtitle: "Academic publications I have co-authored",

  publicationCards: [
    {
      title:
        "A domain agnostic normalization layer for unsupervised adversarial domain adaptation",
      subtitle: "Rob Romijnders, Panagiotis Meletis, Gijs Dubbelman",
      image: require("./assets/images/uada.png"),
      footerLink: [
        { name: "IEEE WACV `18", url: "https://arxiv.org/pdf/1809.05298" },
        {
          name: "Conference poster",
          url:
            "https://www.computer.org/csdl/proceedings-article/wacv/2019/197500b866/18j8EDR8lTG",
        },
      ],
    },
    {
      title: "Applying deep learning to basketball trajectories",
      subtitle: "Rajiv Shah, Rob Romijnders",
      image: require("./assets/images/rnn_bb.png"),
      footerLink: [
        {
          name: "KDD `16",
          url:
            "https://www.researchgate.net/publication/306187086_Applying_Deep_Learning_to_Basketball_Trajectories",
        },
        { name: "arXiv", url: "https://arxiv.org/pdf/1608.03793" },
        {
          name: "Conference poster",
          url:
            "https://www.researchgate.net/publication/306187086_Applying_Deep_Learning_to_Basketball_Trajectories",
        },
      ],
    },
    {
      title:
        "Applying deep bidirectional LSTM and mixture density network for basketball trajectory prediction",
      subtitle:
        "Yu Zhao, Rennong Yang, Guillaume Chevalier, Rajiv C Shah, Rob Romijnders",
      image: require("./assets/images/rnn_bb_2.png"),
      footerLink: [
        {
          name: "Optik `19",
          url:
            "https://www.sciencedirect.com/science/article/abs/pii/S0030402617316662",
        },
        { name: "arXiv", url: "https://arxiv.org/pdf/1708.05824" },
        {
          name: "Journal article",
          url:
            "https://www.sciencedirect.com/science/article/abs/pii/S0030402617316662",
        },
      ],
    },
    {
      title:
        "Data Selection for training Semantic Segmentation CNNs with cross-dataset weak supervision",
      subtitle: "Panagiotis Meletis, Rob Romijnders, Gijs Dubbelman",
      image: require("./assets/images/itsc.png"),
      footerLink: [
        { name: "IEEE ITSC `19", url: "https://arxiv.org/pdf/1907.07023" },
        { name: "Conference poster", url: "https://arxiv.org/pdf/1907.07023" },
      ],
    },

    {
      title:
        "On Robustness and Transferability of Convolutional Neural Networks",
      subtitle:
        "Josip Djolonga, Jessica Yung, Michael Tschannen, Rob Romijnders, Lucas Beyer, Alexander Kolesnikov, Joan Puigcerver, Matthias Minderer, Alexander D'Amour, Dan Moldovan, Sylvan Gelly, Neil Houlsby, Xiaohua Zhai, Mario Lucic",
      image: require("./assets/images/robust.png"),
      footerLink: [{ name: "arXiv", url: "https://arxiv.org/pdf/2007.08558" }],
    },
  ],
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "Public & recorded talks",

  talks: [
    {
      title: "Bayesian Deep learning with 10% of the weights",
      subtitle: "PyData 2018",
      slides_url:
        "https://github.com/RobRomijnders/weight_uncertainty/blob/master/docs/presentation/versions/final_pydata18_bayes_nn_rob_romijnders_1.pdf",
      event_url: "https://www.youtube.com/watch?v=Z7VN7oRA6TY",
    },
    {
      title: "Using deep learning in natural language processing",
      subtitle: "PyData 2017",
      slides_url:
        "https://github.com/RobRomijnders/weight_uncertainty/blob/master/docs/presentation/versions/final_pydata18_bayes_nn_rob_romijnders_1.pdf",
      event_url: "https://www.youtube.com/watch?v=HVdPWoZ_swY&t=840s",
    },
  ],
};

const contactInfo = {
  title: "Contact details:",
  subtitle: "Love to share ideas or collaborate.",
  number: "+31 6 546 44 219",
  email_address: "romijndersrob@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  publicationsSection,
  workExperiences,
  openSource,
  talkSection,
  contactInfo,
};
//export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
