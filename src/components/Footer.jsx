import {React, useState} from "react"
import ScrollAnchorTag from "./ScrollAnchorTag";
import Modal from 'react-modal';
import ContactMe from "./ContactMe";

function Footer() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <footer className="bg-gray-50">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                
                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
                Hey there, thanks for viewing my Portfolio! If you like what you see, have an internship opportunity in hand, or just want to connect, feel free to ping me on Linkedin or Telegram!
                </p>

                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                <li>
                    <ScrollAnchorTag to="aboutme">
                    About Me
                    </ScrollAnchorTag>
                </li>

                <li>
                    <ScrollAnchorTag to="experiences">
                    Work Experiences
                    </ScrollAnchorTag>
                </li>

                <li>
                    <ScrollAnchorTag to="projects">
                    Projects
                    </ScrollAnchorTag>
                </li>

                <li>
                    <button onClick={openModal} className="text-gray-700 font-medium transition hover:text-gray-700/75" href="/">
                    Contact Me!
                    </button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Contact Information"
                        style={{
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              },
                            content: {
                                width: 'auto', // Set the width to auto
                                height: 'auto', // Set the height to auto
                                maxWidth: '80%', // Optionally set a maximum width
                                maxHeight: '80%', // Optionally set a maximum height
                                margin: '0 auto', // Center the modal horizontally
                                overflow: 'auto', // Add scrolling if content overflows
                                border: 'none',
                                borderRadius: '0',
                                background: 'none'
                            },
                        }}
                    >
                        <ContactMe closeModal={closeModal}></ContactMe>
                    </Modal>

                </li>
                </ul>

                <ul className="mt-12 flex justify-center gap-6 md:gap-8">

                <li>
                    <a
                    href="https://github.com/LohYangXian"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-gray-700/75"
                    >
                    <span className="sr-only">GitHub</span>
                    <svg
                        className="h-10 w-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </a>
                </li>

                <li>
                    <a
                    href="https://t.me/saltysheep_yx"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-gray-700/75"
                    >
                    <span className="sr-only">Telegram</span>
                    <svg
                        className="h-10 w-10"
                        fill="currentColor"
                        viewBox="0 0 496 512"
                        aria-hidden="true"
                    >
                        <path
                        fillRule="evenodd"
                        d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </a>
                </li>

                <li>
                    <a
                    href="https://www.instagram.com/saltysheep_yx/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-gray-700/75"
                    >
                    <span className="sr-only">Instagram</span>
                    <svg
                        className="h-10 w-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </a>
                </li>

                <li>
                    <a
                    href="https://www.linkedin.com/in/loh-yang-xian"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-gray-700/75"
                    >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                        className="h-10 w-10"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                    >
                        <path
                        fillRule="evenodd"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </a>
                </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;