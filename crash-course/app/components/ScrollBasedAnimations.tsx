"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

export function ScrollBasedAnimations() {
  const { scrollYProgress } = useScroll();

  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgb(102, 153, 255)", "rgb(255, 178, 178)", "rgb(178, 255, 178)"]
  );
  return (
    <div className="h-full w-full">
      <motion.div
        style={{
          scaleX: scrollYProgress,
          background: background,
          transformOrigin: "left",
          position: "sticky",
          top: 0,
          width: "100%",
          height: "20px",
          marginBottom: "20px",
        }}
      />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        repudiandae aspernatur mollitia, ipsum corrupti quod nam et facere eum
        autem est delectus iusto beatae commodi dolor molestias sit optio
        quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eveniet voluptas mollitia vitae beatae similique tempora obcaecati illo
        eligendi ratione voluptatum dolorum veniam unde dolore nemo quaerat
        commodi, labore corporis eum? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Ab corporis repellendus dicta nobis dolorum ipsam,
        fuga nam suscipit! At illo nam voluptatibus error vel nemo nostrum
        deserunt adipisci corrupti dicta!
      </p>

      <br />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        repudiandae aspernatur mollitia, ipsum corrupti quod nam et facere eum
        autem est delectus iusto beatae commodi dolor molestias sit optio
        quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eveniet voluptas mollitia vitae beatae similique tempora obcaecati illo
        eligendi ratione voluptatum dolorum veniam unde dolore nemo quaerat
        commodi, labore corporis eum? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Ab corporis repellendus dicta nobis dolorum ipsam,
        fuga nam suscipit! At illo nam voluptatibus error vel nemo nostrum
        deserunt adipisci corrupti dicta!
      </p>

      <br />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        repudiandae aspernatur mollitia, ipsum corrupti quod nam et facere eum
        autem est delectus iusto beatae commodi dolor molestias sit optio
        quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eveniet voluptas mollitia vitae beatae similique tempora obcaecati illo
        eligendi ratione voluptatum dolorum veniam unde dolore nemo quaerat
        commodi, labore corporis eum? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Ab corporis repellendus dicta nobis dolorum ipsam,
        fuga nam suscipit! At illo nam voluptatibus error vel nemo nostrum
        deserunt adipisci corrupti dicta!
      </p>

      <br />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        repudiandae aspernatur mollitia, ipsum corrupti quod nam et facere eum
        autem est delectus iusto beatae commodi dolor molestias sit optio
        quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eveniet voluptas mollitia vitae beatae similique tempora obcaecati illo
        eligendi ratione voluptatum dolorum veniam unde dolore nemo quaerat
        commodi, labore corporis eum? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Ab corporis repellendus dicta nobis dolorum ipsam,
        fuga nam suscipit! At illo nam voluptatibus error vel nemo nostrum
        deserunt adipisci corrupti dicta!
      </p>

      <br />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        repudiandae aspernatur mollitia, ipsum corrupti quod nam et facere eum
        autem est delectus iusto beatae commodi dolor molestias sit optio
        quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eveniet voluptas mollitia vitae beatae similique tempora obcaecati illo
        eligendi ratione voluptatum dolorum veniam unde dolore nemo quaerat
        commodi, labore corporis eum? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Ab corporis repellendus dicta nobis dolorum ipsam,
        fuga nam suscipit! At illo nam voluptatibus error vel nemo nostrum
        deserunt adipisci corrupti dicta!
      </p>

      <br />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        repudiandae aspernatur mollitia, ipsum corrupti quod nam et facere eum
        autem est delectus iusto beatae commodi dolor molestias sit optio
        quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eveniet voluptas mollitia vitae beatae similique tempora obcaecati illo
        eligendi ratione voluptatum dolorum veniam unde dolore nemo quaerat
        commodi, labore corporis eum? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Ab corporis repellendus dicta nobis dolorum ipsam,
        fuga nam suscipit! At illo nam voluptatibus error vel nemo nostrum
        deserunt adipisci corrupti dicta!
      </p>

      <br />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        repudiandae aspernatur mollitia, ipsum corrupti quod nam et facere eum
        autem est delectus iusto beatae commodi dolor molestias sit optio
        quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eveniet voluptas mollitia vitae beatae similique tempora obcaecati illo
        eligendi ratione voluptatum dolorum veniam unde dolore nemo quaerat
        commodi, labore corporis eum? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Ab corporis repellendus dicta nobis dolorum ipsam,
        fuga nam suscipit! At illo nam voluptatibus error vel nemo nostrum
        deserunt adipisci corrupti dicta!
      </p>

      <br />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        repudiandae aspernatur mollitia, ipsum corrupti quod nam et facere eum
        autem est delectus iusto beatae commodi dolor molestias sit optio
        quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eveniet voluptas mollitia vitae beatae similique tempora obcaecati illo
        eligendi ratione voluptatum dolorum veniam unde dolore nemo quaerat
        commodi, labore corporis eum? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Ab corporis repellendus dicta nobis dolorum ipsam,
        fuga nam suscipit! At illo nam voluptatibus error vel nemo nostrum
        deserunt adipisci corrupti dicta!
      </p>
    </div>
  );
}
