import React, { useEffect, useRef, useState } from "react";
<p>
“To be a global leader in sustainable cleaning and hygiene solutions by delivering eco‑friendly,
innovative, and high‑quality products that create healthier environments and enhance everyday
living standards.”
</p>
</div>
</div>
</motion.div>


{/* Right column: cols 8-11 */}
<motion.aside
className="who__right"
initial={{ y: 32, opacity: 0 }}
animate={inView ? { y: 0, opacity: 1 } : {}}
transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.1 }}
>
<MetricCard
label="sq ft cleaned each day"
headline={`${formatCompact(sqft)}+`}
caption="Operational footprint"
/>
<MetricCard
label="channel partners"
headline={`${formatCompact(partners)}+`}
caption="Nationwide distribution"
/>
<MetricCard
label="enterprise clients"
headline={`${formatCompact(clients)}+`}
caption="Trusted relationships"
/>
</motion.aside>
</section>
);
}


// Metric card with subtle 3D effect
function MetricCard({ headline, label, caption }) {
return (
<motion.div
className="metric"
whileHover={{ y: -6, rotateX: 0 }}
initial={{ rotateX: 12, opacity: 0, y: 12 }}
whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ type: "spring", stiffness: 110, damping: 12 }}
>
<div className="metric__bg" aria-hidden />
<div className="metric__inner">
<div className="metric__value">{headline}</div>
<div className="metric__label">{label}</div>
<div className="metric__caption">{caption}</div>
</div>
</motion.div>
);
}