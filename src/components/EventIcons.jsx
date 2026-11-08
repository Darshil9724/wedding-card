import { useId } from 'react'

// Hand-drawn illustrated icons for the wedding events (viewBox 64×64).

function ImgIcon({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
    />
  )
}

export const GaneshIcon = () => <ImgIcon src="/images/icons/ganesh.png" alt="Lord Ganesh" />
export const PherasIcon = () => <ImgIcon src="/images/icons/couple-mandap.png" alt="Bride and groom under the mandap" />
export const GarbaIcon = () => <ImgIcon src="/images/icons/ras-garba.png" alt="Couple playing dandiya raas" />
export const HaldiIcon = () => <ImgIcon src="/images/icons/haldi.png" alt="Bride at her haldi ceremony" />
export const CoupleIcon = () => <ImgIcon src="/images/icons/couple-portrait.png" alt="Bride and groom" />

export function MameruIcon() {
  const gid = useId().replace(/:/g, '') + 'm'
  const g = `url(#${gid})`
  return (
    <svg viewBox="0 16 100 78" role="img" aria-label="Decorated Mameru thali with sarees, jewellery box, bangles, coconut and diya">
      <defs>
      <linearGradient id={gid} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="100"><stop offset="0" stopColor="#d9b25a"/>
      <stop offset="0.55" stopColor="#9c6b1f"/>
      <stop offset="1" stopColor="#c99a3e"/>
      </linearGradient>
      </defs><ellipse cx="50" cy="74" rx="46" ry="15" stroke={g} strokeWidth="1.2" fill="#fffdf7" />
      <ellipse cx="50" cy="73" rx="41" ry="12.2" stroke={g} strokeWidth="0.6" fill="#fffdf7" />
      <circle cx="93.60" cy="73.60" r="0.45" fill={g}/>
      <circle cx="93.23" cy="75.38" r="0.45" fill={g}/>
      <circle cx="92.11" cy="77.12" r="0.45" fill={g}/>
      <circle cx="90.28" cy="78.80" r="0.45" fill={g}/>
      <circle cx="87.76" cy="80.40" r="0.45" fill={g}/>
      <circle cx="84.59" cy="81.88" r="0.45" fill={g}/>
      <circle cx="80.83" cy="83.22" r="0.45" fill={g}/>
      <circle cx="76.54" cy="84.39" r="0.45" fill={g}/>
      <circle cx="71.80" cy="85.38" r="0.45" fill={g}/>
      <circle cx="66.68" cy="86.16" r="0.45" fill={g}/>
      <circle cx="61.28" cy="86.74" r="0.45" fill={g}/>
      <circle cx="55.69" cy="87.08" r="0.45" fill={g}/>
      <circle cx="50.00" cy="87.20" r="0.45" fill={g}/>
      <circle cx="44.31" cy="87.08" r="0.45" fill={g}/>
      <circle cx="38.72" cy="86.74" r="0.45" fill={g}/>
      <circle cx="33.32" cy="86.16" r="0.45" fill={g}/>
      <circle cx="28.20" cy="85.38" r="0.45" fill={g}/>
      <circle cx="23.46" cy="84.39" r="0.45" fill={g}/>
      <circle cx="19.17" cy="83.22" r="0.45" fill={g}/>
      <circle cx="15.41" cy="81.88" r="0.45" fill={g}/>
      <circle cx="12.24" cy="80.40" r="0.45" fill={g}/>
      <circle cx="9.72" cy="78.80" r="0.45" fill={g}/>
      <circle cx="7.89" cy="77.12" r="0.45" fill={g}/>
      <circle cx="6.77" cy="75.38" r="0.45" fill={g}/>
      <circle cx="6.40" cy="73.60" r="0.45" fill={g}/>
      <circle cx="6.77" cy="71.82" r="0.45" fill={g}/>
      <circle cx="7.89" cy="70.08" r="0.45" fill={g}/>
      <circle cx="9.72" cy="68.40" r="0.45" fill={g}/>
      <circle cx="12.24" cy="66.80" r="0.45" fill={g}/>
      <circle cx="15.41" cy="65.32" r="0.45" fill={g}/>
      <circle cx="19.17" cy="63.98" r="0.45" fill={g}/>
      <circle cx="23.46" cy="62.81" r="0.45" fill={g}/>
      <circle cx="28.20" cy="61.82" r="0.45" fill={g}/>
      <circle cx="33.32" cy="61.04" r="0.45" fill={g}/>
      <circle cx="38.72" cy="60.46" r="0.45" fill={g}/>
      <circle cx="44.31" cy="60.12" r="0.45" fill={g}/>
      <circle cx="50.00" cy="60.00" r="0.45" fill={g}/>
      <circle cx="55.69" cy="60.12" r="0.45" fill={g}/>
      <circle cx="61.28" cy="60.46" r="0.45" fill={g}/>
      <circle cx="66.68" cy="61.04" r="0.45" fill={g}/>
      <circle cx="71.80" cy="61.82" r="0.45" fill={g}/>
      <circle cx="76.54" cy="62.81" r="0.45" fill={g}/>
      <circle cx="80.83" cy="63.98" r="0.45" fill={g}/>
      <circle cx="84.59" cy="65.32" r="0.45" fill={g}/>
      <circle cx="87.76" cy="66.80" r="0.45" fill={g}/>
      <circle cx="90.28" cy="68.40" r="0.45" fill={g}/>
      <circle cx="92.11" cy="70.08" r="0.45" fill={g}/>
      <circle cx="93.23" cy="71.82" r="0.45" fill={g}/>
      <path d="M88.18 74.46 L85.89 74.35" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M85.58 77.31 L83.46 76.97" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M80.57 79.87 L78.74 79.32" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M73.46 81.96 L72.06 81.25" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M64.77 83.44 L63.88 82.60" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M55.06 84.20 L54.76 83.31" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45.01 84.20 L45.31 83.31" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M35.30 83.44 L36.18 82.61" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26.59 81.97 L27.99 81.26" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.48 79.89 L21.30 79.34" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.44 77.33 L16.57 76.99" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.83 74.49 L14.11 74.37" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.82 71.54 L14.11 71.65" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.42 68.69 L16.54 69.03" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.43 66.13 L21.26 66.68" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26.54 64.04 L27.94 64.75" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M35.23 62.56 L36.12 63.40" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44.94 61.80 L45.24 62.69" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M54.99 61.80 L54.69 62.69" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M64.70 62.56 L63.82 63.39" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M73.41 64.03 L72.01 64.74" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M80.52 66.11 L78.70 66.66" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M85.56 68.67 L83.43 69.01" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M88.17 71.51 L85.89 71.63" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="50" cy="73" rx="35" ry="10" stroke={g} strokeWidth="0.5" fill="none" />
      <path d="M11 66 C7 62 7 52 12 47 C15 44 19 45 21 48 C24 53 23 62 19 66 C17 68 13 68 11 66 Z" stroke={g} strokeWidth="0.9" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M12 48 C10 43 11 40 13 38 M14.5 47 C14 42 15.5 39 17.5 38 M17 47.5 C18 43 20 41 22 41" stroke={g} strokeWidth="0.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 55 C13 57.5 18 57.5 22.3 55 M8.8 58 C13 60.5 18 60.5 22 58" stroke={g} strokeWidth="0.55" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="11.00" cy="58.98" r="0.35" fill={g}/>
      <circle cx="13.50" cy="59.18" r="0.35" fill={g}/>
      <circle cx="16.00" cy="59.22" r="0.35" fill={g}/>
      <circle cx="18.50" cy="59.02" r="0.35" fill={g}/>
      <ellipse cx="15" cy="50.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(0.0 15 52)"/>
      <ellipse cx="15" cy="50.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(45.0 15 52)"/>
      <ellipse cx="15" cy="50.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(90.0 15 52)"/>
      <ellipse cx="15" cy="50.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(135.0 15 52)"/>
      <ellipse cx="15" cy="50.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(180.0 15 52)"/>
      <ellipse cx="15" cy="50.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(225.0 15 52)"/>
      <ellipse cx="15" cy="50.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(270.0 15 52)"/>
      <ellipse cx="15" cy="50.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(315.0 15 52)"/>
      <circle cx="15" cy="52" r="0.60" fill="#fffdf7" stroke={g} strokeWidth="0.4"/>
      <circle cx="15.00" cy="52.00" r="0.24" fill={g}/>
      <ellipse cx="81" cy="64" rx="10.5" ry="4" stroke={g} strokeWidth="1.0" fill="#fffdf7" />
      <ellipse cx="81" cy="64" rx="8.2" ry="2.9" stroke={g} strokeWidth="0.45" fill="none" />
      <circle cx="90.35" cy="64.00" r="0.3" fill={g}/>
      <circle cx="89.10" cy="65.72" r="0.3" fill={g}/>
      <circle cx="85.67" cy="66.99" r="0.3" fill={g}/>
      <circle cx="81.00" cy="67.45" r="0.3" fill={g}/>
      <circle cx="76.33" cy="66.99" r="0.3" fill={g}/>
      <circle cx="72.90" cy="65.72" r="0.3" fill={g}/>
      <circle cx="71.65" cy="64.00" r="0.3" fill={g}/>
      <circle cx="72.90" cy="62.27" r="0.3" fill={g}/>
      <circle cx="76.32" cy="61.01" r="0.3" fill={g}/>
      <circle cx="81.00" cy="60.55" r="0.3" fill={g}/>
      <circle cx="85.67" cy="61.01" r="0.3" fill={g}/>
      <circle cx="89.10" cy="62.27" r="0.3" fill={g}/>
      <ellipse cx="81" cy="60.5" rx="10.5" ry="4" stroke={g} strokeWidth="1.0" fill="none" />
      <ellipse cx="81" cy="60.5" rx="8.2" ry="2.9" stroke={g} strokeWidth="0.45" fill="none" />
      <circle cx="90.35" cy="60.50" r="0.3" fill={g}/>
      <circle cx="89.10" cy="62.23" r="0.3" fill={g}/>
      <circle cx="85.67" cy="63.49" r="0.3" fill={g}/>
      <circle cx="81.00" cy="63.95" r="0.3" fill={g}/>
      <circle cx="76.33" cy="63.49" r="0.3" fill={g}/>
      <circle cx="72.90" cy="62.23" r="0.3" fill={g}/>
      <circle cx="71.65" cy="60.50" r="0.3" fill={g}/>
      <circle cx="72.90" cy="58.77" r="0.3" fill={g}/>
      <circle cx="76.32" cy="57.51" r="0.3" fill={g}/>
      <circle cx="81.00" cy="57.05" r="0.3" fill={g}/>
      <circle cx="85.67" cy="57.51" r="0.3" fill={g}/>
      <circle cx="89.10" cy="58.77" r="0.3" fill={g}/>
      <ellipse cx="81" cy="57" rx="10.5" ry="4" stroke={g} strokeWidth="1.0" fill="none" />
      <ellipse cx="81" cy="57" rx="8.2" ry="2.9" stroke={g} strokeWidth="0.45" fill="none" />
      <circle cx="90.35" cy="57.00" r="0.3" fill={g}/>
      <circle cx="89.10" cy="58.73" r="0.3" fill={g}/>
      <circle cx="85.67" cy="59.99" r="0.3" fill={g}/>
      <circle cx="81.00" cy="60.45" r="0.3" fill={g}/>
      <circle cx="76.33" cy="59.99" r="0.3" fill={g}/>
      <circle cx="72.90" cy="58.73" r="0.3" fill={g}/>
      <circle cx="71.65" cy="57.00" r="0.3" fill={g}/>
      <circle cx="72.90" cy="55.27" r="0.3" fill={g}/>
      <circle cx="76.32" cy="54.01" r="0.3" fill={g}/>
      <circle cx="81.00" cy="53.55" r="0.3" fill={g}/>
      <circle cx="85.67" cy="54.01" r="0.3" fill={g}/>
      <circle cx="89.10" cy="55.27" r="0.3" fill={g}/>
      <ellipse cx="81" cy="53.5" rx="10.5" ry="4" stroke={g} strokeWidth="1.0" fill="none" />
      <ellipse cx="81" cy="53.5" rx="8.2" ry="2.9" stroke={g} strokeWidth="0.45" fill="none" />
      <circle cx="90.35" cy="53.50" r="0.3" fill={g}/>
      <circle cx="89.10" cy="55.23" r="0.3" fill={g}/>
      <circle cx="85.67" cy="56.49" r="0.3" fill={g}/>
      <circle cx="81.00" cy="56.95" r="0.3" fill={g}/>
      <circle cx="76.33" cy="56.49" r="0.3" fill={g}/>
      <circle cx="72.90" cy="55.23" r="0.3" fill={g}/>
      <circle cx="71.65" cy="53.50" r="0.3" fill={g}/>
      <circle cx="72.90" cy="51.77" r="0.3" fill={g}/>
      <circle cx="76.32" cy="50.51" r="0.3" fill={g}/>
      <circle cx="81.00" cy="50.05" r="0.3" fill={g}/>
      <circle cx="85.67" cy="50.51" r="0.3" fill={g}/>
      <circle cx="89.10" cy="51.77" r="0.3" fill={g}/>
      <ellipse cx="81" cy="50" rx="10.5" ry="4" stroke={g} strokeWidth="1.0" fill="none" />
      <ellipse cx="81" cy="50" rx="8.2" ry="2.9" stroke={g} strokeWidth="0.45" fill="none" />
      <circle cx="90.35" cy="50.00" r="0.3" fill={g}/>
      <circle cx="89.10" cy="51.73" r="0.3" fill={g}/>
      <circle cx="85.67" cy="52.99" r="0.3" fill={g}/>
      <circle cx="81.00" cy="53.45" r="0.3" fill={g}/>
      <circle cx="76.33" cy="52.99" r="0.3" fill={g}/>
      <circle cx="72.90" cy="51.73" r="0.3" fill={g}/>
      <circle cx="71.65" cy="50.00" r="0.3" fill={g}/>
      <circle cx="72.90" cy="48.27" r="0.3" fill={g}/>
      <circle cx="76.32" cy="47.01" r="0.3" fill={g}/>
      <circle cx="81.00" cy="46.55" r="0.3" fill={g}/>
      <circle cx="85.67" cy="47.01" r="0.3" fill={g}/>
      <circle cx="89.10" cy="48.27" r="0.3" fill={g}/>
      <path d="M22 60 L30 53 H72 L64 60 Z" stroke={g} strokeWidth="0.9" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M64 60 L72 53 V63 L64 70 Z" stroke={g} strokeWidth="0.9" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M22 60 H64 V70 H22 Z" stroke={g} strokeWidth="0.9" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M22 63 H64 M22 67 H64" stroke={g} strokeWidth="0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 63 L25.5 65 L27 63" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 63 L28.5 65 L30 63" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 63 L31.5 65 L33 63" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33 63 L34.5 65 L36 63" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 63 L37.5 65 L39 63" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M39 63 L40.5 65 L42 63" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 63 L43.5 65 L45 63" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45 63 L46.5 65 L48 63" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M48 63 L49.5 65 L51 63" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M51 63 L52.5 65 L54 63" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M54 63 L55.5 65 L57 63" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M57 63 L58.5 65 L60 63" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 63 L61.5 65 L63 63" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M63 63 L64.5 65 L66 63" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="25.50" cy="68.50" r="0.35" fill={g}/>
      <circle cx="29.50" cy="68.50" r="0.35" fill={g}/>
      <circle cx="33.50" cy="68.50" r="0.35" fill={g}/>
      <circle cx="37.50" cy="68.50" r="0.35" fill={g}/>
      <circle cx="41.50" cy="68.50" r="0.35" fill={g}/>
      <circle cx="45.50" cy="68.50" r="0.35" fill={g}/>
      <circle cx="49.50" cy="68.50" r="0.35" fill={g}/>
      <circle cx="53.50" cy="68.50" r="0.35" fill={g}/>
      <circle cx="57.50" cy="68.50" r="0.35" fill={g}/>
      <circle cx="61.50" cy="68.50" r="0.35" fill={g}/>
      <path d="M64 63 L72 56 M64 67 L72 60" stroke={g} strokeWidth="0.45" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 56.5 H66" stroke={g} strokeWidth="0.35" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0.1 1.3"/>
      <path d="M27 51 L34 45.5 H68 L61 51 Z" stroke={g} strokeWidth="0.9" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M61 51 L68 45.5 V53.5 L61 59.5 Z" stroke={g} strokeWidth="0.9" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M27 51 H61 V59.5 H27 Z" stroke={g} strokeWidth="0.9" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M27 53.8 H61 M27 57 H61" stroke={g} strokeWidth="0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="29" cy="55.4" r="0.7" fill="none" stroke={g} strokeWidth="0.35"/>
      <circle cx="32" cy="55.4" r="0.7" fill="none" stroke={g} strokeWidth="0.35"/>
      <circle cx="35" cy="55.4" r="0.7" fill="none" stroke={g} strokeWidth="0.35"/>
      <circle cx="38" cy="55.4" r="0.7" fill="none" stroke={g} strokeWidth="0.35"/>
      <circle cx="41" cy="55.4" r="0.7" fill="none" stroke={g} strokeWidth="0.35"/>
      <circle cx="44" cy="55.4" r="0.7" fill="none" stroke={g} strokeWidth="0.35"/>
      <circle cx="47" cy="55.4" r="0.7" fill="none" stroke={g} strokeWidth="0.35"/>
      <circle cx="50" cy="55.4" r="0.7" fill="none" stroke={g} strokeWidth="0.35"/>
      <circle cx="53" cy="55.4" r="0.7" fill="none" stroke={g} strokeWidth="0.35"/>
      <circle cx="56" cy="55.4" r="0.7" fill="none" stroke={g} strokeWidth="0.35"/>
      <circle cx="59" cy="55.4" r="0.7" fill="none" stroke={g} strokeWidth="0.35"/>
      <path d="M61 53.8 L68 48.3 M61 57 L68 51.5" stroke={g} strokeWidth="0.45" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="36" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(0.0 36 48.3)"/>
      <ellipse cx="36" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(60.0 36 48.3)"/>
      <ellipse cx="36" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(120.0 36 48.3)"/>
      <ellipse cx="36" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(180.0 36 48.3)"/>
      <ellipse cx="36" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(240.0 36 48.3)"/>
      <ellipse cx="36" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(300.0 36 48.3)"/>
      <circle cx="36" cy="48.3" r="0.34" fill="#fffdf7" stroke={g} strokeWidth="0.4"/>
      <circle cx="36.00" cy="48.30" r="0.135" fill={g}/>
      <ellipse cx="44" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(0.0 44 48.3)"/>
      <ellipse cx="44" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(60.0 44 48.3)"/>
      <ellipse cx="44" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(120.0 44 48.3)"/>
      <ellipse cx="44" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(180.0 44 48.3)"/>
      <ellipse cx="44" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(240.0 44 48.3)"/>
      <ellipse cx="44" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(300.0 44 48.3)"/>
      <circle cx="44" cy="48.3" r="0.34" fill="#fffdf7" stroke={g} strokeWidth="0.4"/>
      <circle cx="44.00" cy="48.30" r="0.135" fill={g}/>
      <ellipse cx="52" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(0.0 52 48.3)"/>
      <ellipse cx="52" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(60.0 52 48.3)"/>
      <ellipse cx="52" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(120.0 52 48.3)"/>
      <ellipse cx="52" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(180.0 52 48.3)"/>
      <ellipse cx="52" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(240.0 52 48.3)"/>
      <ellipse cx="52" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(300.0 52 48.3)"/>
      <circle cx="52" cy="48.3" r="0.34" fill="#fffdf7" stroke={g} strokeWidth="0.4"/>
      <circle cx="52.00" cy="48.30" r="0.135" fill={g}/>
      <ellipse cx="60" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(0.0 60 48.3)"/>
      <ellipse cx="60" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(60.0 60 48.3)"/>
      <ellipse cx="60" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(120.0 60 48.3)"/>
      <ellipse cx="60" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(180.0 60 48.3)"/>
      <ellipse cx="60" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(240.0 60 48.3)"/>
      <ellipse cx="60" cy="47.67" rx="0.34" ry="0.63" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(300.0 60 48.3)"/>
      <circle cx="60" cy="48.3" r="0.34" fill="#fffdf7" stroke={g} strokeWidth="0.4"/>
      <circle cx="60.00" cy="48.30" r="0.135" fill={g}/>
      <path d="M37 41 L41.5 31 H58.5 L55 41 Z" stroke={g} strokeWidth="0.9" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M39.2 39.5 L42.7 32.3 H57.2 L54.2 39.5 Z" stroke={g} strokeWidth="0.4" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <ellipse cx="48.5" cy="34.54" rx="0.68" ry="1.26" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(0.0 48.5 35.8)"/>
      <ellipse cx="48.5" cy="34.54" rx="0.68" ry="1.26" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(45.0 48.5 35.8)"/>
      <ellipse cx="48.5" cy="34.54" rx="0.68" ry="1.26" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(90.0 48.5 35.8)"/>
      <ellipse cx="48.5" cy="34.54" rx="0.68" ry="1.26" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(135.0 48.5 35.8)"/>
      <ellipse cx="48.5" cy="34.54" rx="0.68" ry="1.26" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(180.0 48.5 35.8)"/>
      <ellipse cx="48.5" cy="34.54" rx="0.68" ry="1.26" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(225.0 48.5 35.8)"/>
      <ellipse cx="48.5" cy="34.54" rx="0.68" ry="1.26" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(270.0 48.5 35.8)"/>
      <ellipse cx="48.5" cy="34.54" rx="0.68" ry="1.26" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(315.0 48.5 35.8)"/>
      <circle cx="48.5" cy="35.8" r="0.68" fill="#fffdf7" stroke={g} strokeWidth="0.4"/>
      <circle cx="48.50" cy="35.80" r="0.27" fill={g}/>
      <path d="M36 41 H56 V48 H36 Z" stroke={g} strokeWidth="0.9" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M56 41 L59.5 38.5 V45.5 L56 48 Z" stroke={g} strokeWidth="0.8" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M36 43 H56" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="40.00" cy="45.50" r="0.4" fill={g}/>
      <circle cx="44.00" cy="45.50" r="0.4" fill={g}/>
      <circle cx="48.00" cy="45.50" r="0.4" fill={g}/>
      <circle cx="52.00" cy="45.50" r="0.4" fill={g}/>
      <path d="M38 41.5 C38.5 50 44 54 46 54.5 C48 54 53.5 50 54 41.5" stroke={g} strokeWidth="0.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="38.00" cy="41.50" r="0.75" fill="#fffdf7" stroke={g} strokeWidth="0.35"/>
      <circle cx="39.14" cy="44.30" r="0.75" fill="#fffdf7" stroke={g} strokeWidth="0.35"/>
      <circle cx="40.29" cy="46.97" r="0.75" fill="#fffdf7" stroke={g} strokeWidth="0.35"/>
      <circle cx="41.43" cy="49.36" r="0.75" fill="#fffdf7" stroke={g} strokeWidth="0.35"/>
      <circle cx="42.57" cy="51.35" r="0.75" fill="#fffdf7" stroke={g} strokeWidth="0.35"/>
      <circle cx="43.71" cy="52.85" r="0.75" fill="#fffdf7" stroke={g} strokeWidth="0.35"/>
      <circle cx="44.86" cy="53.78" r="0.75" fill="#fffdf7" stroke={g} strokeWidth="0.35"/>
      <circle cx="46.00" cy="54.10" r="0.75" fill="#fffdf7" stroke={g} strokeWidth="0.35"/>
      <circle cx="47.14" cy="53.78" r="0.75" fill="#fffdf7" stroke={g} strokeWidth="0.35"/>
      <circle cx="48.29" cy="52.85" r="0.75" fill="#fffdf7" stroke={g} strokeWidth="0.35"/>
      <circle cx="49.43" cy="51.35" r="0.75" fill="#fffdf7" stroke={g} strokeWidth="0.35"/>
      <circle cx="50.57" cy="49.36" r="0.75" fill="#fffdf7" stroke={g} strokeWidth="0.35"/>
      <circle cx="51.71" cy="46.97" r="0.75" fill="#fffdf7" stroke={g} strokeWidth="0.35"/>
      <circle cx="52.86" cy="44.30" r="0.75" fill="#fffdf7" stroke={g} strokeWidth="0.35"/>
      <circle cx="54.00" cy="41.50" r="0.75" fill="#fffdf7" stroke={g} strokeWidth="0.35"/>
      <path d="M46 54.3 C44.3 56.3 44.3 58.4 46 59.8 C47.7 58.4 47.7 56.3 46 54.3 Z" stroke={g} strokeWidth="0.6" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="46.00" cy="57.20" r="0.6" fill={g}/>
      <path d="M42 80 C44 85 56 85 58 80 Z" stroke={g} strokeWidth="0.9" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M43 81.6 C47 83.3 53 83.3 57 81.6" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0.1 1.2"/>
      <path d="M50 72 C52 75 52 78 50 79.6 C48 78 48 75 50 72 Z" stroke={g} strokeWidth="0.7" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M50 75.2 C50.8 76.5 50.8 77.7 50 78.6 C49.2 77.7 49.2 76.5 50 75.2 Z" stroke={g} strokeWidth="0.4" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <ellipse cx="31" cy="79.5" rx="4.6" ry="1.8" stroke={g} strokeWidth="0.8" fill="#fffdf7" />
      <path d="M26.4 79.5 C27 83 35 83 35.6 79.5" stroke={g} strokeWidth="0.8" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <ellipse cx="31" cy="79.5" rx="3.4" ry="1.1" stroke={g} strokeWidth="0.4" fill="none" />
      <ellipse cx="69" cy="79.5" rx="4.6" ry="1.8" stroke={g} strokeWidth="0.8" fill="#fffdf7" />
      <path d="M64.4 79.5 C65 83 73 83 73.6 79.5" stroke={g} strokeWidth="0.8" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <ellipse cx="69" cy="79.5" rx="3.4" ry="1.1" stroke={g} strokeWidth="0.4" fill="none" />
      <ellipse cx="18" cy="72.60" rx="0.75" ry="1.40" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(0.0 18 74)"/>
      <ellipse cx="18" cy="72.60" rx="0.75" ry="1.40" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(45.0 18 74)"/>
      <ellipse cx="18" cy="72.60" rx="0.75" ry="1.40" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(90.0 18 74)"/>
      <ellipse cx="18" cy="72.60" rx="0.75" ry="1.40" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(135.0 18 74)"/>
      <ellipse cx="18" cy="72.60" rx="0.75" ry="1.40" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(180.0 18 74)"/>
      <ellipse cx="18" cy="72.60" rx="0.75" ry="1.40" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(225.0 18 74)"/>
      <ellipse cx="18" cy="72.60" rx="0.75" ry="1.40" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(270.0 18 74)"/>
      <ellipse cx="18" cy="72.60" rx="0.75" ry="1.40" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(315.0 18 74)"/>
      <circle cx="18" cy="74" r="0.75" fill="#fffdf7" stroke={g} strokeWidth="0.4"/>
      <circle cx="18.00" cy="74.00" r="0.3" fill={g}/>
      <ellipse cx="82" cy="72.60" rx="0.75" ry="1.40" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(0.0 82 74)"/>
      <ellipse cx="82" cy="72.60" rx="0.75" ry="1.40" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(45.0 82 74)"/>
      <ellipse cx="82" cy="72.60" rx="0.75" ry="1.40" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(90.0 82 74)"/>
      <ellipse cx="82" cy="72.60" rx="0.75" ry="1.40" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(135.0 82 74)"/>
      <ellipse cx="82" cy="72.60" rx="0.75" ry="1.40" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(180.0 82 74)"/>
      <ellipse cx="82" cy="72.60" rx="0.75" ry="1.40" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(225.0 82 74)"/>
      <ellipse cx="82" cy="72.60" rx="0.75" ry="1.40" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(270.0 82 74)"/>
      <ellipse cx="82" cy="72.60" rx="0.75" ry="1.40" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(315.0 82 74)"/>
      <circle cx="82" cy="74" r="0.75" fill="#fffdf7" stroke={g} strokeWidth="0.4"/>
      <circle cx="82.00" cy="74.00" r="0.3" fill={g}/>
      <ellipse cx="24" cy="78.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(0.0 24 80)"/>
      <ellipse cx="24" cy="78.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(45.0 24 80)"/>
      <ellipse cx="24" cy="78.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(90.0 24 80)"/>
      <ellipse cx="24" cy="78.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(135.0 24 80)"/>
      <ellipse cx="24" cy="78.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(180.0 24 80)"/>
      <ellipse cx="24" cy="78.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(225.0 24 80)"/>
      <ellipse cx="24" cy="78.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(270.0 24 80)"/>
      <ellipse cx="24" cy="78.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(315.0 24 80)"/>
      <circle cx="24" cy="80" r="0.60" fill="#fffdf7" stroke={g} strokeWidth="0.4"/>
      <circle cx="24.00" cy="80.00" r="0.24" fill={g}/>
      <ellipse cx="76" cy="78.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(0.0 76 80)"/>
      <ellipse cx="76" cy="78.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(45.0 76 80)"/>
      <ellipse cx="76" cy="78.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(90.0 76 80)"/>
      <ellipse cx="76" cy="78.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(135.0 76 80)"/>
      <ellipse cx="76" cy="78.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(180.0 76 80)"/>
      <ellipse cx="76" cy="78.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(225.0 76 80)"/>
      <ellipse cx="76" cy="78.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(270.0 76 80)"/>
      <ellipse cx="76" cy="78.88" rx="0.60" ry="1.12" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(315.0 76 80)"/>
      <circle cx="76" cy="80" r="0.60" fill="#fffdf7" stroke={g} strokeWidth="0.4"/>
      <circle cx="76.00" cy="80.00" r="0.24" fill={g}/>
      <ellipse cx="10" cy="71.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(0.0 10 72)"/>
      <ellipse cx="10" cy="71.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(45.0 10 72)"/>
      <ellipse cx="10" cy="71.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(90.0 10 72)"/>
      <ellipse cx="10" cy="71.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(135.0 10 72)"/>
      <ellipse cx="10" cy="71.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(180.0 10 72)"/>
      <ellipse cx="10" cy="71.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(225.0 10 72)"/>
      <ellipse cx="10" cy="71.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(270.0 10 72)"/>
      <ellipse cx="10" cy="71.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(315.0 10 72)"/>
      <circle cx="10" cy="72" r="0.52" fill="#fffdf7" stroke={g} strokeWidth="0.4"/>
      <circle cx="10.00" cy="72.00" r="0.21" fill={g}/>
      <ellipse cx="90" cy="71.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(0.0 90 72)"/>
      <ellipse cx="90" cy="71.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(45.0 90 72)"/>
      <ellipse cx="90" cy="71.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(90.0 90 72)"/>
      <ellipse cx="90" cy="71.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(135.0 90 72)"/>
      <ellipse cx="90" cy="71.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(180.0 90 72)"/>
      <ellipse cx="90" cy="71.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(225.0 90 72)"/>
      <ellipse cx="90" cy="71.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(270.0 90 72)"/>
      <ellipse cx="90" cy="71.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(315.0 90 72)"/>
      <circle cx="90" cy="72" r="0.52" fill="#fffdf7" stroke={g} strokeWidth="0.4"/>
      <circle cx="90.00" cy="72.00" r="0.21" fill={g}/>
      <path d="M30 27.8 L30.6 29.4 L32.2 30 L30.6 30.6 L30 32.2 L29.4 30.6 L27.8 30 L29.4 29.4 Z" fill={g}/>
      <path d="M70 26.24 L70.48 27.52 L71.76 28 L70.48 28.48 L70 29.76 L69.52 28.48 L68.24 28 L69.52 27.52 Z" fill={g}/>
      <path d="M50 20.02 L50.54 21.46 L51.98 22 L50.54 22.54 L50 23.98 L49.46 22.54 L48.02 22 L49.46 21.46 Z" fill={g}/>
      <path d="M88 38.46 L88.42 39.58 L89.54 40 L88.42 40.42 L88 41.54 L87.58 40.42 L86.46 40 L87.58 39.58 Z" fill={g}/>
      <path d="M8 34.46 L8.42 35.58 L9.54 36 L8.42 36.42 L8 37.54 L7.58 36.42 L6.46 36 L7.58 35.58 Z" fill={g}/>
      <path d="M22 38.68 L22.36 39.64 L23.32 40 L22.36 40.36 L22 41.32 L21.64 40.36 L20.68 40 L21.64 39.64 Z" fill={g}/>
    </svg>
  )
}

export function ThaliIcon() {
  const gid = useId().replace(/:/g, '') + 't'
  const g = `url(#${gid})`
  return (
    <svg viewBox="0 30 100 58" role="img" aria-label="Gujarati thali with dal, kadhi, shaak, rotli, rice, papad, laddoo and chaas">
      <defs>
      <linearGradient id={gid} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="100"><stop offset="0" stopColor="#d9b25a"/>
      <stop offset="0.55" stopColor="#9c6b1f"/>
      <stop offset="1" stopColor="#c99a3e"/>
      </linearGradient>
      </defs><ellipse cx="50" cy="68" rx="46" ry="17" stroke={g} strokeWidth="1.2" fill="#fffdf7" />
      <ellipse cx="50" cy="67" rx="41" ry="14" stroke={g} strokeWidth="0.6" fill="#fffdf7" />
      <circle cx="93.60" cy="67.60" r="0.45" fill={g}/>
      <circle cx="93.28" cy="69.48" r="0.45" fill={g}/>
      <circle cx="92.33" cy="71.33" r="0.45" fill={g}/>
      <circle cx="90.77" cy="73.13" r="0.45" fill={g}/>
      <circle cx="88.61" cy="74.85" r="0.45" fill={g}/>
      <circle cx="85.88" cy="76.46" r="0.45" fill={g}/>
      <circle cx="82.64" cy="77.94" r="0.45" fill={g}/>
      <circle cx="78.91" cy="79.28" r="0.45" fill={g}/>
      <circle cx="74.77" cy="80.44" r="0.45" fill={g}/>
      <circle cx="70.26" cy="81.41" r="0.45" fill={g}/>
      <circle cx="65.46" cy="82.19" r="0.45" fill={g}/>
      <circle cx="60.43" cy="82.75" r="0.45" fill={g}/>
      <circle cx="55.26" cy="83.09" r="0.45" fill={g}/>
      <circle cx="50.00" cy="83.20" r="0.45" fill={g}/>
      <circle cx="44.74" cy="83.09" r="0.45" fill={g}/>
      <circle cx="39.57" cy="82.75" r="0.45" fill={g}/>
      <circle cx="34.54" cy="82.19" r="0.45" fill={g}/>
      <circle cx="29.74" cy="81.41" r="0.45" fill={g}/>
      <circle cx="25.23" cy="80.44" r="0.45" fill={g}/>
      <circle cx="21.09" cy="79.28" r="0.45" fill={g}/>
      <circle cx="17.36" cy="77.94" r="0.45" fill={g}/>
      <circle cx="14.12" cy="76.46" r="0.45" fill={g}/>
      <circle cx="11.39" cy="74.85" r="0.45" fill={g}/>
      <circle cx="9.23" cy="73.13" r="0.45" fill={g}/>
      <circle cx="7.67" cy="71.33" r="0.45" fill={g}/>
      <circle cx="6.72" cy="69.48" r="0.45" fill={g}/>
      <circle cx="6.40" cy="67.60" r="0.45" fill={g}/>
      <circle cx="6.72" cy="65.72" r="0.45" fill={g}/>
      <circle cx="7.67" cy="63.87" r="0.45" fill={g}/>
      <circle cx="9.23" cy="62.07" r="0.45" fill={g}/>
      <circle cx="11.39" cy="60.35" r="0.45" fill={g}/>
      <circle cx="14.12" cy="58.74" r="0.45" fill={g}/>
      <circle cx="17.36" cy="57.26" r="0.45" fill={g}/>
      <circle cx="21.09" cy="55.92" r="0.45" fill={g}/>
      <circle cx="25.23" cy="54.76" r="0.45" fill={g}/>
      <circle cx="29.74" cy="53.79" r="0.45" fill={g}/>
      <circle cx="34.54" cy="53.01" r="0.45" fill={g}/>
      <circle cx="39.57" cy="52.45" r="0.45" fill={g}/>
      <circle cx="44.74" cy="52.11" r="0.45" fill={g}/>
      <circle cx="50.00" cy="52.00" r="0.45" fill={g}/>
      <circle cx="55.26" cy="52.11" r="0.45" fill={g}/>
      <circle cx="60.43" cy="52.45" r="0.45" fill={g}/>
      <circle cx="65.46" cy="53.01" r="0.45" fill={g}/>
      <circle cx="70.26" cy="53.79" r="0.45" fill={g}/>
      <circle cx="74.77" cy="54.76" r="0.45" fill={g}/>
      <circle cx="78.91" cy="55.92" r="0.45" fill={g}/>
      <circle cx="82.64" cy="57.26" r="0.45" fill={g}/>
      <circle cx="85.88" cy="58.74" r="0.45" fill={g}/>
      <circle cx="88.61" cy="60.35" r="0.45" fill={g}/>
      <circle cx="90.77" cy="62.07" r="0.45" fill={g}/>
      <circle cx="92.33" cy="63.87" r="0.45" fill={g}/>
      <circle cx="93.28" cy="65.72" r="0.45" fill={g}/>
      <path d="M88.32 68.57 L86.14 68.47" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M86.10 71.64 L84.05 71.35" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M81.79 74.43 L79.97 73.98" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M75.62 76.80 L74.16 76.20" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M67.97 78.59 L66.94 77.89" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M59.27 79.72 L58.74 78.94" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50.03 80.10 L50.03 79.30" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40.79 79.72 L41.32 78.95" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32.09 78.60 L33.11 77.90" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24.43 76.81 L25.88 76.21" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.25 74.45 L20.06 74.00" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.92 71.66 L15.98 71.37" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.69 68.59 L13.87 68.49" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.68 65.43 L13.86 65.53" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.90 62.36 L15.95 62.65" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.21 59.57 L20.03 60.02" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24.38 57.20 L25.84 57.80" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32.03 55.41 L33.06 56.11" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40.73 54.28 L41.26 55.06" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M49.97 53.90 L49.97 54.70" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M59.21 54.28 L58.68 55.05" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M67.91 55.40 L66.89 56.10" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M75.57 57.19 L74.12 57.79" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M81.75 59.55 L79.94 60.00" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M86.08 62.34 L84.02 62.63" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M88.31 65.41 L86.13 65.51" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M84 38 L86 60 C86 61.5 92 61.5 92 60 L94 38 Z" stroke={g} strokeWidth="0.9" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <ellipse cx="89" cy="38" rx="5" ry="1.6" stroke={g} strokeWidth="0.9" fill="#fffdf7" />
      <path d="M84.6 44 C87 45 91 45 93.4 44" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="88.00" cy="48.00" r="0.35" fill={g}/>
      <circle cx="90.50" cy="49.50" r="0.35" fill={g}/>
      <circle cx="89.00" cy="52.00" r="0.35" fill={g}/>
      <circle cx="90.50" cy="53.50" r="0.35" fill={g}/>
      <circle cx="88.00" cy="56.00" r="0.35" fill={g}/>
      <circle cx="90.50" cy="57.50" r="0.35" fill={g}/>
      <path d="M91 37.5 C93 34 96 33.5 97 34.5 C96 36.5 93.5 37.8 91 37.5 Z" stroke={g} strokeWidth="0.6" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M91.2 37.4 C93 36 95 35 96.6 34.6" stroke={g} strokeWidth="0.35" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 56 C17 61.5 31 61.5 31.5 56 Z" stroke={g} strokeWidth="0.9" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M18 58.6 C22 60 26 60 30 58.6" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0.1 1.2"/>
      <ellipse cx="24" cy="56" rx="7.5" ry="2.7" stroke={g} strokeWidth="0.9" fill="#fffdf7" />
      <ellipse cx="24" cy="56" rx="6.2" ry="2" stroke={g} strokeWidth="0.4" fill="none" />
      <path d="M19.5 56 q1.5 -0.8 3 0 t3 0 t3 0" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32.5 51.5 C33 57.0 47 57.0 47.5 51.5 Z" stroke={g} strokeWidth="0.9" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M34 54.1 C38 55.5 42 55.5 46 54.1" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0.1 1.2"/>
      <ellipse cx="40" cy="51.5" rx="7.5" ry="2.7" stroke={g} strokeWidth="0.9" fill="#fffdf7" />
      <ellipse cx="40" cy="51.5" rx="6.2" ry="2" stroke={g} strokeWidth="0.4" fill="none" />
      <circle cx="37.00" cy="51.10" r="0.35" fill={g}/>
      <circle cx="39.00" cy="52.00" r="0.35" fill={g}/>
      <circle cx="41.50" cy="51.00" r="0.35" fill={g}/>
      <circle cx="43.50" cy="51.80" r="0.35" fill={g}/>
      <circle cx="40.00" cy="50.60" r="0.35" fill={g}/>
      <path d="M49.5 51.5 C50 57.0 64 57.0 64.5 51.5 Z" stroke={g} strokeWidth="0.9" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M51 54.1 C55 55.5 59 55.5 63 54.1" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0.1 1.2"/>
      <ellipse cx="57" cy="51.5" rx="7.5" ry="2.7" stroke={g} strokeWidth="0.9" fill="#fffdf7" />
      <ellipse cx="57" cy="51.5" rx="6.2" ry="2" stroke={g} strokeWidth="0.4" fill="none" />
      <rect x="53.20" y="51.00" width="1.2" height="1" fill="#fffdf7" stroke={g} strokeWidth="0.3"/>
      <rect x="55.60" y="50.40" width="1.2" height="1" fill="#fffdf7" stroke={g} strokeWidth="0.3"/>
      <rect x="58.00" y="51.30" width="1.2" height="1" fill="#fffdf7" stroke={g} strokeWidth="0.3"/>
      <rect x="60.00" y="50.60" width="1.2" height="1" fill="#fffdf7" stroke={g} strokeWidth="0.3"/>
      <rect x="56.80" y="51.80" width="1.2" height="1" fill="#fffdf7" stroke={g} strokeWidth="0.3"/>
      <path d="M65.5 55 C66 60.5 80 60.5 80.5 55 Z" stroke={g} strokeWidth="0.9" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M67 57.6 C71 59 75 59 79 57.6" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0.1 1.2"/>
      <ellipse cx="73" cy="55" rx="7.5" ry="2.7" stroke={g} strokeWidth="0.9" fill="#fffdf7" />
      <ellipse cx="73" cy="55" rx="6.2" ry="2" stroke={g} strokeWidth="0.4" fill="none" />
      <path d="M73 55 m-3 0 a3 1.1 0 1 0 6 0 a2 0.7 0 1 0 -4 0 a1 0.35 0 1 0 2 0" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 52 C20.5 50 23.5 48.5 22 46.5 C20.5 44.5 23 43.5 22 42" stroke={g} strokeWidth="0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 51 C24.5 49 27.5 47.5 26 45.5 C24.5 43.5 27 42.5 26 41" stroke={g} strokeWidth="0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 47.5 C38.5 45.5 41.5 44.0 40 42.0 C38.5 40.0 41 39.0 40 37.5" stroke={g} strokeWidth="0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M57 47.5 C55.5 45.5 58.5 44.0 57 42.0 C55.5 40.0 58 39.0 57 37.5" stroke={g} strokeWidth="0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="25" cy="76" rx="12" ry="4.2" stroke={g} strokeWidth="0.9" fill="#fffdf7" />
      <ellipse cx="25" cy="74" rx="12" ry="4.2" stroke={g} strokeWidth="0.9" fill="#fffdf7" />
      <ellipse cx="25" cy="72" rx="12" ry="4.2" stroke={g} strokeWidth="0.9" fill="#fffdf7" />
      <circle cx="21.00" cy="71.50" r="0.4" fill={g}/>
      <circle cx="25.00" cy="73.00" r="0.4" fill={g}/>
      <circle cx="29.00" cy="71.00" r="0.4" fill={g}/>
      <circle cx="27.00" cy="70.60" r="0.4" fill={g}/>
      <circle cx="22.00" cy="73.00" r="0.4" fill={g}/>
      <path d="M17 71.6 C21 69.8 28 69.8 32 71.2" stroke={g} strokeWidth="0.4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7"/>
      <path d="M38 72 C38 64 46 61 51 61 C56 61 64 64 64 72 C58 74.5 44 74.5 38 72 Z" stroke={g} strokeWidth="0.9" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M53.5 69.4 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(24 53.5 69.4)"/>
      <path d="M59.8 69.4 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(34 59.8 69.4)"/>
      <path d="M41.6 67.2 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(35 41.6 67.2)"/>
      <path d="M54.0 70.7 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(-31 54.0 70.7)"/>
      <path d="M50.4 65.5 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(4 50.4 65.5)"/>
      <path d="M52.5 63.6 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(-23 52.5 63.6)"/>
      <path d="M46.6 70.8 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(21 46.6 70.8)"/>
      <path d="M44.2 69.9 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(-29 44.2 69.9)"/>
      <path d="M53.3 64.5 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(-40 53.3 64.5)"/>
      <path d="M58.4 65.2 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(-23 58.4 65.2)"/>
      <path d="M60.6 70.5 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(-17 60.6 70.5)"/>
      <path d="M60.2 67.8 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(14 60.2 67.8)"/>
      <path d="M45.1 71.0 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(15 45.1 71.0)"/>
      <path d="M60.3 70.6 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(-16 60.3 70.6)"/>
      <path d="M48.2 64.8 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(-28 48.2 64.8)"/>
      <path d="M42.3 65.9 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(8 42.3 65.9)"/>
      <path d="M41.1 68.9 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(-13 41.1 68.9)"/>
      <path d="M47.2 70.0 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(-2 47.2 70.0)"/>
      <path d="M47.3 67.3 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(16 47.3 67.3)"/>
      <path d="M42.1 71.3 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(-38 42.1 71.3)"/>
      <path d="M56.0 70.3 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(-39 56.0 70.3)"/>
      <path d="M56.8 66.4 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(6 56.8 66.4)"/>
      <path d="M44.6 71.1 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(-24 44.6 71.1)"/>
      <path d="M56.1 70.9 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(35 56.1 70.9)"/>
      <path d="M47.9 66.3 l1.1 0" stroke={g} strokeWidth="0.45" strokeLinecap="round" transform="rotate(2 47.9 66.3)"/>
      <path d="M50 61.3 C49 59 50 57.5 52 57 C52.5 59 51.8 60.6 50 61.3 Z" stroke={g} strokeWidth="0.5" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <g transform="rotate(-18 76 68)"><ellipse cx="76" cy="68" rx="10" ry="6.5" stroke={g} strokeWidth="0.9" fill="#fffdf7" />
      <circle cx="71.00" cy="67.00" r="0.4" fill={g}/>
      <circle cx="74.00" cy="70.00" r="0.4" fill={g}/>
      <circle cx="77.00" cy="65.00" r="0.4" fill={g}/>
      <circle cx="80.00" cy="69.00" r="0.4" fill={g}/>
      <circle cx="82.00" cy="67.00" r="0.4" fill={g}/>
      <circle cx="70.00" cy="70.50" r="0.4" fill={g}/>
      <circle cx="76.00" cy="68.50" r="0.4" fill={g}/>
      <circle cx="79.00" cy="71.50" r="0.4" fill={g}/>
      <circle cx="73.00" cy="64.50" r="0.4" fill={g}/>
      </g><circle cx="60" cy="81" r="3.2" fill="#fffdf7" stroke={g} strokeWidth="0.8"/>
      <circle cx="59.00" cy="80.00" r="0.3" fill={g}/>
      <circle cx="61.00" cy="81.00" r="0.3" fill={g}/>
      <circle cx="59.80" cy="82.20" r="0.3" fill={g}/>
      <circle cx="60.90" cy="79.60" r="0.3" fill={g}/>
      <circle cx="58.60" cy="81.50" r="0.3" fill={g}/>
      <circle cx="66.5" cy="81.5" r="3.2" fill="#fffdf7" stroke={g} strokeWidth="0.8"/>
      <circle cx="65.50" cy="80.50" r="0.3" fill={g}/>
      <circle cx="67.50" cy="81.50" r="0.3" fill={g}/>
      <circle cx="66.30" cy="82.70" r="0.3" fill={g}/>
      <circle cx="67.40" cy="80.10" r="0.3" fill={g}/>
      <circle cx="65.10" cy="82.00" r="0.3" fill={g}/>
      <circle cx="63.2" cy="77.5" r="3.2" fill="#fffdf7" stroke={g} strokeWidth="0.8"/>
      <circle cx="62.20" cy="76.50" r="0.3" fill={g}/>
      <circle cx="64.20" cy="77.50" r="0.3" fill={g}/>
      <circle cx="63.00" cy="78.70" r="0.3" fill={g}/>
      <circle cx="64.10" cy="76.10" r="0.3" fill={g}/>
      <circle cx="61.80" cy="78.00" r="0.3" fill={g}/>
      <path d="M40 82 C40 78 47 78 47 82 Z" stroke={g} strokeWidth="0.8" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M40.8 81.3 H46.2 M43.5 81.5 L41.8 79.2 M43.5 81.5 L45.2 79.2 M43.5 81.5 V78.6" stroke={g} strokeWidth="0.35" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M48.5 84 C51 81 54 80.5 56 80.8 C54.5 82.2 52 83.6 48.5 84 Z" stroke={g} strokeWidth="0.7" fill="#fffdf7" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M56 80.8 C57 80 57.3 79.2 57.8 78.6" stroke={g} strokeWidth="0.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="8" cy="65.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(0.0 8 66)"/>
      <ellipse cx="8" cy="65.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(45.0 8 66)"/>
      <ellipse cx="8" cy="65.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(90.0 8 66)"/>
      <ellipse cx="8" cy="65.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(135.0 8 66)"/>
      <ellipse cx="8" cy="65.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(180.0 8 66)"/>
      <ellipse cx="8" cy="65.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(225.0 8 66)"/>
      <ellipse cx="8" cy="65.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(270.0 8 66)"/>
      <ellipse cx="8" cy="65.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(315.0 8 66)"/>
      <circle cx="8" cy="66" r="0.52" fill="#fffdf7" stroke={g} strokeWidth="0.4"/>
      <circle cx="8.00" cy="66.00" r="0.21" fill={g}/>
      <ellipse cx="92" cy="67.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(0.0 92 68)"/>
      <ellipse cx="92" cy="67.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(45.0 92 68)"/>
      <ellipse cx="92" cy="67.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(90.0 92 68)"/>
      <ellipse cx="92" cy="67.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(135.0 92 68)"/>
      <ellipse cx="92" cy="67.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(180.0 92 68)"/>
      <ellipse cx="92" cy="67.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(225.0 92 68)"/>
      <ellipse cx="92" cy="67.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(270.0 92 68)"/>
      <ellipse cx="92" cy="67.02" rx="0.52" ry="0.98" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(315.0 92 68)"/>
      <circle cx="92" cy="68" r="0.52" fill="#fffdf7" stroke={g} strokeWidth="0.4"/>
      <circle cx="92.00" cy="68.00" r="0.21" fill={g}/>
      <ellipse cx="14" cy="77.16" rx="0.45" ry="0.84" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(0.0 14 78)"/>
      <ellipse cx="14" cy="77.16" rx="0.45" ry="0.84" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(45.0 14 78)"/>
      <ellipse cx="14" cy="77.16" rx="0.45" ry="0.84" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(90.0 14 78)"/>
      <ellipse cx="14" cy="77.16" rx="0.45" ry="0.84" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(135.0 14 78)"/>
      <ellipse cx="14" cy="77.16" rx="0.45" ry="0.84" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(180.0 14 78)"/>
      <ellipse cx="14" cy="77.16" rx="0.45" ry="0.84" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(225.0 14 78)"/>
      <ellipse cx="14" cy="77.16" rx="0.45" ry="0.84" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(270.0 14 78)"/>
      <ellipse cx="14" cy="77.16" rx="0.45" ry="0.84" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(315.0 14 78)"/>
      <circle cx="14" cy="78" r="0.45" fill="#fffdf7" stroke={g} strokeWidth="0.4"/>
      <circle cx="14.00" cy="78.00" r="0.18" fill={g}/>
      <ellipse cx="86" cy="78.16" rx="0.45" ry="0.84" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(0.0 86 79)"/>
      <ellipse cx="86" cy="78.16" rx="0.45" ry="0.84" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(45.0 86 79)"/>
      <ellipse cx="86" cy="78.16" rx="0.45" ry="0.84" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(90.0 86 79)"/>
      <ellipse cx="86" cy="78.16" rx="0.45" ry="0.84" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(135.0 86 79)"/>
      <ellipse cx="86" cy="78.16" rx="0.45" ry="0.84" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(180.0 86 79)"/>
      <ellipse cx="86" cy="78.16" rx="0.45" ry="0.84" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(225.0 86 79)"/>
      <ellipse cx="86" cy="78.16" rx="0.45" ry="0.84" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(270.0 86 79)"/>
      <ellipse cx="86" cy="78.16" rx="0.45" ry="0.84" fill="#fffdf7" stroke={g} strokeWidth="0.4" transform="rotate(315.0 86 79)"/>
      <circle cx="86" cy="79" r="0.45" fill="#fffdf7" stroke={g} strokeWidth="0.4"/>
      <circle cx="86.00" cy="79.00" r="0.18" fill={g}/>
      <path d="M14 38.46 L14.42 39.58 L15.54 40 L14.42 40.42 L14 41.54 L13.58 40.42 L12.46 40 L13.58 39.58 Z" fill={g}/>
      <path d="M32 36.68 L32.36 37.64 L33.32 38 L32.36 38.36 L32 39.32 L31.64 38.36 L30.68 38 L31.64 37.64 Z" fill={g}/>
      <path d="M66 34.46 L66.42 35.58 L67.54 36 L66.42 36.42 L66 37.54 L65.58 36.42 L64.46 36 L65.58 35.58 Z" fill={g}/>
      <path d="M78 40.9 L78.3 41.7 L79.1 42 L78.3 42.3 L78 43.1 L77.7 42.3 L76.9 42 L77.7 41.7 Z" fill={g}/>
    </svg>
  )
}
