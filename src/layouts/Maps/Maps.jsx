import React from "react";
import "./maps.css";

function Maps() {
  return (
    <section id="maps-container">
      <iframe
        title="maps"
        className="i-maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13178.66730856124!2d-58.83397670064447!3d-34.333503372857415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb61ad1ddf8915%3A0x6ab317b53d016997!2sFleni%20Escobar!5e0!3m2!1ses-419!2sar!4v1728931464234!5m2!1ses-419!2sar"
        style={{ border: "0", }}
        allowfullscreen="false"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Maps;
