'use client';
import { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    // Load Google AdSense script
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="ad-container">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5525727232661114"
        crossorigin="anonymous"
      ></script>

      {/* Replace 'your_ad_unit_id' with the actual ID provided by Google AdSense */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5525727232661114"
        data-ad-slot="3447365695"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdComponent;
