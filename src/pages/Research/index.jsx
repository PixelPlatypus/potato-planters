import React from "react";
import "./main.css";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
const Research = () => {
  return (
    <div className="planet-info">
      <section className="section">
        <table className="data-table">
          <caption>About the Star</caption>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>Star Type</td>
            <td>F8</td>
          </tr>
          <tr>
            <td>Radius</td>
            <td>1.221 times the Sun's radius</td>
          </tr>
          <tr>
            <td>Absolute Luminosity</td>
            <td>1.95 (compared to the Sun)</td>
          </tr>
          <tr>
            <td>Habitable Range</td>
            <td>1.3314 to 1.9181 astronomical units</td>
          </tr>
          <tr>
            <td>Estimated Lifespan</td>
            <td>6.611 billion years</td>
          </tr>
          <tr>
            <td>Surface Temperature</td>
            <td>6180 Kelvin</td>
          </tr>
          <tr>
            <td>Mass</td>
            <td>1.184 times the Solar mass</td>
          </tr>
          <tr>
            <td>Color Index</td>
            <td>0.53</td>
          </tr>
        </table>
      </section>

      <section className="section">
        <table className="data-table">
          <caption>About the Planet</caption>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>Distance from Star</td>
            <td>1.55976 Astronomical units</td>
          </tr>
          <tr>
            <td>Density (g/cc)</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Mass</td>
            <td>1.4 Earth mass</td>
          </tr>
          <tr>
            <td>Radius</td>
            <td>1.08 Earth radius</td>
          </tr>
          <tr>
            <td>Black Body Surface Temp.</td>
            <td>239.87 Kelvin</td>
          </tr>
          <tr>
            <td>Actual Surface Temp.</td>
            <td>298.168 Kelvin</td>
          </tr>
          <tr>
            <td>Albedo</td>
            <td>0.325</td>
          </tr>
          <tr>
            <td>Atmospheric Pressure</td>
            <td>124117 Pascal</td>
          </tr>
          <tr>
            <td>Melting Point of Water</td>
            <td>0.001738 degrees Celsius</td>
          </tr>
        </table>
        <table className="data-table">
          <caption className="text-center">Atmospheric Composition</caption>
          <tr>
            <td>N2 (Nitrogen)</td>
            <td>70%</td>
          </tr>
          <tr>
            <td>O2 (Oxygen)</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>CO2 (Carbon Dioxide)</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>Water Vapor (H2O)</td>
            <td>3%</td>
          </tr>
          <tr>
            <td>Methane (CH4)</td>
            <td>1%</td>
          </tr>
          <tr>
            <td>Trace Gases (Including Noble Gases)</td>
            <td>1%</td>
          </tr>
        </table>
      </section>

      <div className="bg-gray-100 p-6 w-4/5 mx-auto">
        <h1 className="text-3xl font-bold mb-4 w-4/5 mx-auto">
          Formulas we used to complete this project
        </h1>
        <ul className="list-disc pl-6">
          <li>
            <h2>Inner Radius Formula</h2>
            <BlockMath math={"R_i = \\sqrt{\\frac{L_*}{1.1}}"} />
          </li>
          <li>
            <h2>Outer Radius Formula</h2>
            <BlockMath math={"R_o = \\sqrt{\\frac{L_*}{0.53}}"} />
          </li>

          <li>
            <h2>Absolute Magnitude</h2>
            <BlockMath
              math={"M = m - 5\\cdot\\log_{10}\\left(\\frac{d}{10}\\right)"}
            />
          </li>
          <li>
            <h2>Black Body Surface temperature of the planet</h2>
            <BlockMath
              math={
                "T = \\left(\\frac{L-L\\alpha}{16\\pi\\sigma R^2}\\right)^{1/4}"
              }
            />
          </li>
          <li>
            <h2>Escape Velocity</h2>
            <BlockMath math={"v_e = \\sqrt{\\frac{2GM}{R}}"} />
          </li>
          <li></li>
        </ul>
      </div>

      <div className="bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4 w-4/5 mx-auto">
          Planet Formation and Evolution
        </h1>

        {/* Timeline of Formation */}
        <div className="mb-8 w-4/5 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Timeline of Formation</h2>
          <div className="space-y-4">
            <div>
              <p className="text-lg">
                <strong>0-500 Million Years:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>
                  The planet forms through accretion within the protoplanetary
                  disk.
                </li>
                <li>
                  The initial atmosphere is dominated by methane (CH4), ammonia
                  (NH3), water (H2O), and hydrogen (H2). No free oxygen is
                  present.
                </li>
                <li>
                  The planet undergoes a period of heavy bombardment from
                  asteroids and comets, possibly bringing more water and organic
                  molecules.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg">
                <strong>
                  Chemical Evolution (500 Million to 1 Billion Years):
                </strong>
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Under the influence of external energy sources (like UV
                  radiation from the star, electrical discharges from lightning,
                  and volcanic activity), simple molecules in the atmosphere and
                  oceans react to form more complex organic compounds, including
                  amino acids, nucleotides, and simple sugars.
                </li>
                <li>
                  These organic molecules accumulate in the oceans, creating a
                  'primordial soup.'
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg">
                <strong>
                  Formation of Protocells (1 to 1.5 Billion Years):
                </strong>
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Organic molecules in the primordial soup begin to form lipid
                  bilayers, creating cell-like structures known as protocells or
                  coacervates.
                </li>
                <li>
                  These protocells might have had the ability to grow and
                  divide, although they weren't truly living by modern
                  definitions.
                </li>
                <li>Within these protocells, the first RNA molecules form.</li>
              </ul>
            </div>
            <div>
              <p className="text-lg">
                <strong>
                  RNA World and First Life (1.5 to 2 Billion Years):
                </strong>
              </p>
              <ul className="list-disc pl-6">
                <li>
                  The 'RNA World' hypothesis suggests that RNA-based life
                  dominated this early era. These RNA molecules could replicate
                  and undergo natural selection.
                </li>
                <li>
                  Eventually, DNA, a more stable genetic material, and proteins,
                  more versatile and efficient catalysts, evolve. This marks the
                  transition from RNA-based life to DNA/protein-based life.
                </li>
                <li>
                  The first true single-celled organisms, possibly similar to
                  modern archaea or bacteria, emerge.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg">
                <strong>
                  Emergence of Photosynthesis (2 to 2.5 Billion Years):
                </strong>
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Some of these early organisms develop the ability to perform
                  photosynthesis, using energy to convert CO2 into organic
                  compounds and releasing O2.
                </li>
                <li>
                  This begins the slow increase of oxygen in the atmosphere, a
                  significant departure from the initial conditions.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg">
                <strong>
                  Oxygen Revolution and Complex Life (2.5 to 3 Billion Years and
                  Beyond):
                </strong>
              </p>
              <ul className="list-disc pl-6">
                <li>
                  As oxygen levels rise, many anaerobic organisms die off, but
                  this also allows for the evolution of aerobic respiration, a
                  more efficient energy-generating process.
                </li>
                <li>
                  Eukaryotic cells emerge, possibly through symbiotic
                  relationships between different prokaryotic cells.
                </li>
                <li>
                  The proliferation of eukaryotic cells allows for even more
                  complex multicellular life forms to develop.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prediction of Sky Color */}
        <div className="mb-8 w-4/5 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Prediction of Sky Color
          </h2>
          <p>
            The star's spectral characteristics and atmospheric composition
            result in a unique sky color on this planet. The F8 star, with its
            peak emission shifted towards the ultraviolet but not drastically,
            affects the incoming sunlight. The atmospheric composition primarily
            composed of N2 and O2 would scatter light in a way similar to
            Earth's atmosphere. Other pollutants and particles in the atmosphere
            may cause sunrise and sunset to be more reddish-orange. During the
            daytime, the sky would appear brighter blue, albeit with a slightly
            different shade due to the spectral difference. Sunrise and sunset
            would exhibit colors closer to the star's spectrum, resulting in
            orange, red, and purple hues.
          </p>
        </div>
        <div></div>

        {/* Adaptations of Microorganisms */}
        <div className="mb-8 w-4/5 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Adaptations of Microorganisms
          </h2>
          <p>
            Microorganisms on this planet have evolved various adaptations to
            survive in its specific environment. These adaptations include
            thicker cell walls to withstand external pressures and avoid lysing,
            pigmentation optimized for absorbing different wavelengths, more
            thermophilic traits to thrive in higher temperatures, the ability to
            utilize both aerobic and anaerobic metabolism due to
            lower-than-usual oxygen levels, and adaptive metabolism specialized
            for environments rich in carbon dioxide.
          </p>
        </div>

        {/* Conclusion */}
        <div className="mb-8 w-4/5 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p>
            In conclusion, the unique characteristics of this star and planet
            have led to a fascinating journey of evolution, from the planet's
            formation through various stages of chemical evolution to the
            emergence of complex life forms. The predictions regarding the
            planet's sky color, adaptations of microorganisms, and the broader
            understanding of the star-planet system provide valuable insights
            into the potential diversity of life in the universe.
          </p>
        </div>
      </div>

      {/* Continue adding sections for adaptations of terrestrial and aquatic creatures, eyesight evolution, citations, contact, and conclusion */}
    </div>
  );
};

export default Research;
