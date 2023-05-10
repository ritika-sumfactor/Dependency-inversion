function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner";
export default function Home() {
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} />
        </div>
      </main>
    </div>
  );
import styles from "../styles/Home.module.css";

import Banner from "../components/banner";
import Card from "../components/card";

export default function Home() {
const handleOnBannerBtnClick = () => {
export default function Home() {
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} />
        </div>
        <Card
          name="DarkHorse Coffee"
          imgUrl="/static/hero-image.png"
          href="/coffee-store/darkhose-coffee"
        />
      </main>
    </div>
  );

