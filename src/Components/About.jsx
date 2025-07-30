import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 min-h-screen bg-background text-text-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-6" data-aos="fade-right">
            <p className="text-text-secondary leading-relaxed">
              I am a passionate Full Stack Developer with a keen eye for design and a commitment to creating seamless user experiences.
              With expertise in both front-end and back-end development, I bridge the gap between design and functionality.
            </p>

            <p className="text-text-secondary leading-relaxed">
              My journey in web development started with a curiosity for creating interactive experiences.
              Today, I specialize in building modern web applications using cutting-edge technologies.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-primary">Education</h3>
              <ul className="space-y-4">
                <li className="text-text-secondary">
                  <span className="text-text-accent">2023 - 2027</span>
                  <p className="font-medium">Bachelor of Engineering in Information Technology</p>
                  <p>MIT ADT University</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Stats/Info */}
          <div className="space-y-6" data-aos="fade-left">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-background-lighter border rounded-lg">
                <h4 className="text-4xl font-bold text-primary mb-2">1+</h4>
                <p className="text-text-secondary">Years of Experience</p>
              </div>
              <div className="p-6 bg-background-lighter border rounded-lg">
                <h4 className="text-4xl font-bold text-primary mb-2">12+</h4>
                <p className="text-text-secondary">Projects Completed</p>
              </div>
            </div>

            <div className="p-6 bg-background-lighter border rounded-lg">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Areas of Expertise</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Full Stack Web Development</li>
                <li>• UI/UX Design</li>
                <li>• Database Design & Management</li>
                <li>• RESTful API Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
