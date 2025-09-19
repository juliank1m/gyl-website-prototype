import React from "react"
import "./Pamphlets.css"

// Import all pamphlet files
import pamphlet2017 from "../../assets/pamphlets/2017.pdf"
import pamphlet2018 from "../../assets/pamphlets/2018.pdf"
import pamphlet2019 from "../../assets/pamphlets/2019.pdf"
import pamphlet2020 from "../../assets/pamphlets/2020.pdf"
import pamphlet2021 from "../../assets/pamphlets/2021.pdf"
import pamphlet2022 from "../../assets/pamphlets/2022.pdf"
import pamphlet2023 from "../../assets/pamphlets/2023.pdf"
import pamphlet2024 from "../../assets/pamphlets/2024.pdf"
import pamphlet2025 from "../../assets/pamphlets/2025.pdf"

const Pamphlets = () => {
  const pamphlets = [
    { year: 2025, file: pamphlet2025 },
    { year: 2024, file: pamphlet2024 },
    { year: 2023, file: pamphlet2023 },
    { year: 2022, file: pamphlet2022 },
    { year: 2021, file: pamphlet2021 },
    { year: 2020, file: pamphlet2020 },
    { year: 2019, file: pamphlet2019 },
    { year: 2018, file: pamphlet2018 },
    { year: 2017, file: pamphlet2017 },
  ]

  return (
    <section className="pamphlets container" id="pamphlets">
      <h2>Download Our Pamphlets</h2>
      <div className="pamphlets-grid">
        {pamphlets.map((p) => (
          <a
            key={p.year}
            href={p.file}
            target="_blank"
            rel="noopener noreferrer"
            className="pamphlet-btn"
          >
            📄 Pamphlet {p.year}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Pamphlets
