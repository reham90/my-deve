import styles from "./IconContainer.module.css";
import {
  FaPaperPlane,
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaFirefoxBrowser,
  FaReddit,
  FaMediumM,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa";
import { AiFillWechat, AiTwotoneMail } from "react-icons/ai";

export function IconContainer({ tokeninfodata }) {
  return (
    <>
      <ul className={styles.socialIcons}>
        {tokeninfodata && tokeninfodata.contractInfo.website ? (
          <li>
            <a
              href={tokeninfodata.contractInfo.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFirefoxBrowser />
            </a>
          </li>
        ) : null}
        {tokeninfodata && tokeninfodata.contractInfo.twitter ? (
          <li>
            <a
              href={tokeninfodata.contractInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
        ) : null}
        {tokeninfodata && tokeninfodata.contractInfo.telegram ? (
          <li>
            <a
              href={tokeninfodata.contractInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPaperPlane />
            </a>
          </li>
        ) : null}
        {tokeninfodata && tokeninfodata.contractInfo.github ? (
          <li>
            <a
              href={tokeninfodata.contractInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        ) : null}
        {tokeninfodata && tokeninfodata.contractInfo.facebook ? (
          <li>
            <a
              href={tokeninfodata.contractInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </li>
        ) : null}
        {tokeninfodata && tokeninfodata.contractInfo.reddit ? (
          <li>
            <a
              href={tokeninfodata.contractInfo.reddit}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReddit />
            </a>
          </li>
        ) : null}
        {tokeninfodata && tokeninfodata.contractInfo.medium ? (
          <li>
            <a
              href={tokeninfodata.contractInfo.medium}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMediumM />
            </a>
          </li>
        ) : null}
        {tokeninfodata && tokeninfodata.contractInfo.email ? (
          <li>
            <a
              href={`mailto:${tokeninfodata.contractInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiTwotoneMail />
            </a>
          </li>
        ) : null}
        {tokeninfodata && tokeninfodata.contractInfo.wechat ? (
          <li>
            <a
              href={tokeninfodata.contractInfo.wechat}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillWechat />
            </a>
          </li>
        ) : null}
        {tokeninfodata && tokeninfodata.contractInfo.linkedin ? (
          <li>
            <a
              href={tokeninfodata.contractInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
        ) : null}
        {tokeninfodata && tokeninfodata.contractInfo.discord ? (
          <li>
            <a
              href={tokeninfodata.contractInfo.discord}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </a>
          </li>
        ) : null}
      </ul>
    </>
  );
}
