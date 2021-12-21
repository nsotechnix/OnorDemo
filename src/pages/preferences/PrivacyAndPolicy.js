import React from 'react'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import './PrivacyAndPolicy.scss'

const TermsOfService = (props) => {

    let PrivacyContent = (
        <div>
            <p style={{ textAlign: 'center', background: 'transparent', marginBottom: '0.21cm', lineHeight: '150%' }}><strong>PRIVACY POLICY</strong></p>
            <p style={{ textAlign: 'center', marginBottom: '0.21cm', lineHeight: '150%', background: 'rgb(255, 255, 255)' }}>Last Updated: Friday, September 25, 2020</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>We are delighted that you have shown interest in the services of Onor Services LLC (“Onor”, “we”, “us”, “our”), which are provided via the Onor Platform (“Platform”). Data protection is a particularly high priority for the management of Onor. The use of the Platform of Onor is possible without any indication of personal data; however, if a data subject wants to use special services via our Platform, processing of personal data may become necessary. If the processing of personal data is necessary, and there is no statutory basis for such processing, we generally obtain consent from the data subject.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The processing of personal data, such as the name, address, e-mail address, or telephone number of a data subject shall always be in line with the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA) and in accordance with the country-specific data protection regulations applicable to Onor. Utilizing this data protection declaration, our enterprise would like to inform the general public of the nature, scope, and purpose of the personal data we collect, use and process. Furthermore, data subjects are informed through this data protection declaration, of the rights to which they are entitled.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>As the controller, Onor has implemented numerous technical and organizational measures to ensure the complete protection of personal data processed through this Platform. However, Internet-based data transmissions may, in principle, have security gaps, so absolute protection may not be guaranteed. For this reason, every data subject is free to transfer personal data to us via alternative means, e.g., by telephone.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>&nbsp;</p>
            
            <ol>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>Definitions</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The data protection declaration of Onor is based on the terms used by the European legislator for the adoption of the General Data Protection Regulation (GDPR). Our data protection declaration should be legible and understandable for the general public, as well as our customers and business partners. To ensure this, we would like to first explain the terminology used. In this data protection declaration, we use, among other things, the following terms:</p>
            <ol>
                <ol type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Personal data</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Personal data means any information relating to an identified or identifiable natural person (“data subject”). An identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural, or social identity of that natural person.</p>
            <ol>
                <ol start={2} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Data subject</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Data subject is any identified or identifiable natural person, whose personal data is processed by the controller responsible for the processing.</p>
            <ol>
                <ol start={3} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Processing</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Processing is any operation or set of operations which are performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.</p>
            <ol>
                <ol start={4} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Restriction of processing</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Restriction of processing is the marking of stored personal data with the aim of limiting their processing in the future.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}><br /><br /></p>
            <ol>
                <ol start={5} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Profiling</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Profiling means any form of automated processing of personal data consisting of the use of personal data to evaluate certain personal aspects relating to a natural person, in particular to analyze or predict aspects concerning that natural person’s performance at work, economic situation, health, personal preferences, interests, reliability, behavior, location, or movements.</p>
            <ol>
                <ol start={6} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Pseudonymization</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Pseudonymization is the processing of personal data in such a manner that the personal data can no longer be attributed to a specific data subject without the use of additional information, provided that such additional information is kept separately and is subject to technical and organizational measures to ensure that the personal data are not attributed to an identified or identifiable natural person.</p>
            <ol>
                <ol start={7} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Controller or controller responsible for the processing</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Controller or controller responsible for the processing is the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data; where the purposes and means of such processing are determined by Union or Member State law, the controller or the specific criteria for its nomination may be provided for by Union or Member State law.</p>
            <ol>
                <ol start={8} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Processor</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Processor is a natural or legal person, public authority, agency, or other body which processes personal data on behalf of the controller.</p>
            <ol>
                <ol start={9} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Recipient</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Recipient is a natural or legal person, public authority, agency, or another body, to which the personal data are disclosed, whether a third party or not. However, public authorities which may receive personal data in the framework of a particular inquiry in accordance with Union or Member State law shall not be regarded as recipients; the processing of those data by those public authorities shall be in compliance with the applicable data protection rules according to the purposes of the processing.</p>
            <ol>
                <ol start={10} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Third party</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Third party is a natural or legal person, public authority, agency,, or body other than the data subject, controller, processor, and persons who, under the direct authority of the controller or processor, are authorized to process personal data.</p>
            <ol>
                <ol start={11} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Consent</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Consent of the data subject is any freely given, specific, informed, and unambiguous indication of the data subject’s wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her.</p>
            <ol start={2}>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>Name and Address of the controller</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Controller for the General Data Protection Regulation (GDPR), other data protection laws applicable in Member states of the European Union, and other provisions related to data protection is:</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Onor Services LLC, a company registered in Delaware, represented by ONOR</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Info<a href="mailto:privacy@onor.world"><u>@onor.world</u></a></p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Onor.World</p>
            <ol start={3}>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>Name and Address of the Data Protection Officer:</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Any data subject may, at any time, contact our Data Protection Officer directly with all questions and suggestions concerning data protection.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>ONOR</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>info@onor.world</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}><br /><br /></p>
            <ol start={4}>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>Cookies</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The Platform of Onor uses cookies. Cookies are text files that are stored in a computer system via an Internet browser.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Many Internet sites and servers use cookies. Many cookies contain a so-called cookie ID. A cookie ID is a unique identifier of the cookie. It consists of a character string through which website and servers can be assigned to the specific Internet browser in which the cookie was stored. This allows visited Internet sites and servers to differentiate the individual browser of the data subject from other Internet browsers that contain other cookies. A specific Internet browser can be recognized and identified using the unique cookie ID.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Through the use of cookies, Onor can provide the users of this Platform with more user-friendly services that would not be possible without the cookie setting.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>By means of a cookie, the information and offers on our Platform can be optimized with the user in mind. Cookies allow us, as previously mentioned, to recognize our Platform users. The purpose of this recognition is to make it easier for users to utilize our Platform. The Platform user that uses cookies e.g. does not have to enter access data each time the Platform is accessed because this is taken over by the Platform, and the cookie is thus stored on the user’s computer system. Another example is the cookie of a shopping cart in an online shop. The online store remembers the articles that a customer has placed in the virtual shopping cart via a cookie.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The data subject may, at any time, prevent the setting of cookies through our Platform employing a corresponding setting of the Internet browser used, and may thus permanently deny the setting of cookies. Furthermore, already set cookies may be deleted at any time via an Internet browser or other software programs. This is possible in all popular Internet browsers. If the data subject deactivates the setting of cookies in the Internet browser used, not all functions of our Platform may be entirely usable.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Some of the advertisers on our Platform may use cookies and web beacons. Each of our advertising partners has their own Privacy Policy for their policies on user data.</p>
            <ol start={5}>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>Collection of general data and information</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The Platform of Onor collects a series of general data and information when a data subject or automated system calls up the Platform. This general data and information are stored in the server log files. Collected data may include, but not limited to, (1) the browser types and versions used, (2) the operating system used by the accessing system, (3) the website from which an accessing system reaches our Platform (so-called referrers), (4) the sub-websites, (5) the date and time of access to the Platform, (6) an Internet protocol address (IP address), (7) the Internet service provider of the accessing system, and (8) any other similar data and information that may be used in the event of attacks on our information technology systems.
                {/* This paragraph addresses the data collected automatically by ONOR. */}
            </p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>We may also collect data about the device you are using to access our Platform. This data may include the device type, operating system, unique device identifiers, device settings, Platform traffic statistics, page views, feedbacks, and geo-location data. What we collect can depend on the individual settings of your device.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>In addition to the above mentioned, we also collect data such as: (1) Name, (2) Contact details (e-mail address, telephone number, mailing address, etc.), (3) Username and password (4) Business information Areas of specialization, (5) Government identification numbers, (6) Communication preferences, (7)</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>When using these general data and information, Onor does not draw any conclusions about the data subject. Rather, this information is needed to (1) deliver the content of our Platform correctly, (2) optimize the content of our <u>Platform</u> as well as its advertisement, (3) communicate with users, including by mail, telephone, facsimile, e-mail, mobile alerts and SMS text messaging, (4) notify users of our new products and services and to provide users with product news and updates, promotional materials or newsletters, tips, or other helpful information, (5) seek users’ views on our products and services (6)monitor our regulatory compliance (7) respond to users’ requests, (8) personalize our communications, (9) create a profile about users to match them with education/awareness programs, collaboration opportunities or obtain services from users, (10) consider applications for employment, (11) administrative and quality assurance purposes, such as to perform data analysis to identify usage trends, determine the effectiveness of our promotional campaigns and general operation of the Website; to improve our level of service (12) ensure the long-term viability of our information technology systems and <u>Platform</u> technology, and (13) provide law enforcement authorities with the information necessary for criminal prosecution in case of a cyber-attack. Therefore, Onor analyses anonymously collected data and information statistically, with the aim of increasing the data protection and data security of our enterprise and to achieve an optimal level of protection for the personal data we process. The anonymous data of the server log files are stored separately from all personal data provided by a data subject.</p>
            <ol start={6}>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>Use of general data and information</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes:</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>to enable you to customize or personalize your experience of our Platform; to enable you to access and use our Platform, associated applications, and associated social media platforms; to contact and communicate with you and to run competitions and/or offer additional benefits to you.</p>
            <ol start={7}>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>Disclosure of personal information to third parties</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>We may disclose personal information to:</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>third party service providers for the purpose of enabling them to provide their services, including (without limitation) IT service providers, data storage, hosting and server providers, ad networks, analytics, error loggers, debt collectors, maintenance or problem-solving providers, marketing or advertising providers, professional advisors, and payment systems operators; our employees, contractors and/or related entities; courts, tribunals, regulatory authorities and law enforcement officers, as required by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise or defend our legal rights; and third parties, including agents or sub-contractors, who assist us in providing information, products, services or direct marketing to you.</p>
            <ol start={8}>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>International transfers of personal information</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The personal information we collect is stored and processed in the United States, or where we or our partners, affiliates, and third-party providers maintain facilities. By providing us with your personal information, you consent to the disclosure to these overseas third parties.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>We will ensure that any transfer of personal information from countries in the European Economic Area (EEA) to countries outside the EEA will be protected by appropriate safeguards, for example, by using standard data protection clauses approved by the European Commission or the use of binding corporate rules or other legally accepted means.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Where we transfer personal information from a non-EEA country to another country, you acknowledge that third parties in other jurisdictions may not be subject to similar data protection laws to the ones in our jurisdiction. There are risks if any such third party engages in any act or practice that would contravene the data privacy laws in our jurisdiction, and this might mean that you will not be able to seek redress under our jurisdiction’s privacy laws.</p>
            <ol start={9}>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>Business transfers</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>If we or our assets are acquired, or in the unlikely event that we go out of business or enter bankruptcy, we would include data among the assets transferred to any parties who acquire us. You acknowledge that such transfers may occur and that any parties who acquire us may continue to use your personal information according to this policy.</p>
            <ol start={10}>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>Limits of our policy</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Our Platform may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites and cannot accept responsibility or liability for their respective privacy practices.</p>
            <ol start={11}>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>Contact possibility via the Platform</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The Platform of Onor contains information that enables a quick electronic contact to our enterprise, as well as direct communication with us, which also includes a general address of the so-called electronic mail (e-mail address). If a data subject contacts the controller by e-mail or via a contact form, the personal data transmitted by the data subject are automatically stored. Such personal data transmitted on a voluntary basis by a data subject to the data controller are stored for the purpose of processing or contacting the data subject. There is no transfer of this personal data to third parties.</p>
            <ol start={12}>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>Routine erasure and blocking of personal data</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Temporary data is stored by the Controller for a period of not more than 90 days.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The data controller shall process and store the personal data of the data subject only for the period necessary to achieve the purpose of storage, or as far as this is granted by the European legislator or other legislators in laws or regulations to which the controller is subject.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>If the storage purpose is not applicable, or if a storage period prescribed by the European legislator or another competent legislator expires, the personal data are routinely blocked or erased in accordance with legal requirements.</p>
            <ol start={13}>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>Rights of the data subject</h1>
                </li>
            </ol>
            <ol start={5}>
                <ol type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Right of confirmation</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Each data subject shall have the right granted by the European legislator to obtain from the controller the confirmation as to whether or not personal data concerning him or her are being processed. If a data subject wishes to avail himself of this right of confirmation, he or she may, at any time, contact our Data Protection Officer or another employee of the controller.</p>
            <ol start={5}>
                <ol start={2} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Right of access</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Each data subject shall have the right granted by the European legislator to obtain from the controller free information about his or her personal data stored at any time and a copy of this information. Furthermore, the European directives and regulations grant the data subject access to the following information: the purposes of the processing; the categories of personal data concerned; the recipients or categories of recipients to whom the personal data have been or will be disclosed, in particular recipients in third countries or international organizations; where possible, the envisaged period for which the personal data will be stored, or, if not possible, the criteria used to determine that period; the existence of the right to request from the controller rectification or erasure of personal data, or restriction of processing of personal data concerning the data subject, or to object to such processing; the existence of the right to file a complaint with a supervisory authority; where the personal data are not collected from the data subject, any available information as to their source; the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) of the GDPR and, at least in those cases, meaningful information about the logic involved, as well as the significance and envisaged consequences of such processing for the data subject.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Furthermore, the data subject shall have a right to obtain information as to whether personal data are transferred to a third country or an international organization. Where this is the case, the data subject shall have the right to be informed of the appropriate safeguards relating to the transfer.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>If a data subject wishes to avail himself of this right of access, he or she may at any time contact our Data Protection Officer or another employee of the controller.</p>
            <ol start={5}>
                <ol start={3} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Right to rectification</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Each data subject shall have the right granted by the European legislator to obtain from the controller without undue delay the rectification of inaccurate personal data concerning him or her. Taking into account the purposes of the processing, the data subject shall have the right to have incomplete personal data completed, including by means of providing a supplementary statement.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>If a data subject wishes to exercise this right to rectification, he or she may, at any time, contact our Data Protection Officer or another employee of the controller.</p>
            <ol start={5}>
                <ol start={4} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Right to erasure (Right to be forgotten)</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Each data subject shall have the right granted by the European legislator to obtain from the controller the erasure of personal data concerning him or her without undue delay, and the controller shall have an obligation to erase personal data without undue delay where one of the following grounds applies, as long as the processing is not necessary:</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The personal data is no longer necessary in relation to the purposes for which they were collected or otherwise processed.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The data subject withdraws consent to which the processing is based according to point (a) of Article 6(1) of the GDPR, or point (a) of Article 9(2) of the GDPR, and where there is no other legal ground for the processing.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The data subject objects to the processing in accordance with Article 21(1) of the GDPR, and there are no overriding legitimate grounds for the processing, or the data subject objects to the processing pursuant to Article 21(2) of the GDPR.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The personal data have been unlawfully processed.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The personal data must be erased for compliance with a legal obligation in Union or Member State law to which the controller is subject.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The personal data have been collected in relation to the offer of information society services referred to in Article 8(1) of the GDPR.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>If one of the aforementioned reasons applies, and a data subject wishes to request the erasure of personal data stored by Onor, he or she may at any time contact our Data Protection Officer or another employee of the controller. The Data Protection Officer of Onor or another employee shall promptly ensure that the erasure request is complied with immediately.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Where the controller has made personal data public and is obliged pursuant to Article 17(1) to erase the personal data, the controller, taking account of available technology and the cost of implementation, shall take reasonable steps, including technical measures, to inform other controllers processing the personal data that the data subject has requested the erasure by such controllers of any links to, or copy or replication of, those personal data, as far as processing is not required. The Data Protection Officer of Onor or another employee will arrange the necessary measures in individual cases.</p>
            <ol start={5}>
                <ol start={5} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Right of restriction of processing</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Each data subject shall have the right granted by the European legislator to obtain from the controller restriction of processing where one of the following applies:</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The accuracy of the personal data is contested by the data subject, for a period enabling the controller to verify the accuracy of the personal data.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The processing is unlawful, and the data subject opposes the erasure of the personal data and requests the restriction of their use instead.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The controller no longer needs the personal data for the processing, but they are required by the data subject for the establishment, exercise, or defense of legal claims.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The data subject has objected to processing pursuant to Article 21(1) of the GDPR pending the verification whether the legitimate grounds of the controller override those of the data subject.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>If one of the conditions, as mentioned above, is met, and a data subject wishes to request the restriction of the processing of personal data stored by Onor, he or she may at any time contact our Data Protection Officer or another employee of the controller. The Data Protection Officer of Onor or another employee will arrange the restriction of the processing.</p>
            <ol start={5}>
                <ol start={6} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Right to data portability</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Each data subject shall have the right granted by the European legislator to receive the personal data concerning him or her, which was provided to a controller in a structured, commonly used, and machine-readable format. He or she shall have the right to transmit those data to another controller without hindrance from the controller to which the personal data have been provided. As long as the processing is based on consent pursuant to point (a) of Article 6(1) of the GDPR or point (a) of Article 9(2) of the GDPR, or on a contract pursuant to point (b) of Article 6(1) of the GDPR, and the processing is carried out by automated means, as long as the processing is not necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Furthermore, in exercising his or her right to data portability pursuant to Article 20(1) of the GDPR, the data subject shall have the right to have personal data transmitted directly from one controller to another, where technically feasible and when doing so does not adversely affect the rights and freedoms of others.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>In order to assert the right to data portability, the data subject may at any time contact the Data Protection Officer designated by Onor or another employee.</p>
            <ol start={5}>
                <ol start={7} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Right to object</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Each data subject shall have the right granted by the European legislator to object, on grounds relating to his or her particular situation, at any time, to processing of personal data concerning him or her, which is based on point (e) or (f) of Article 6(1) of the GDPR. This also applies to profiling based on these provisions.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Onor shall no longer process the personal data in the event of the objection unless we can demonstrate compelling legitimate grounds for the processing which override the interests, rights, and freedoms of the data subject, or for the establishment, exercise, or defense of legal claims.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>If Onor processes personal data for direct marketing purposes, the data subject shall have the right to object at any time to the processing of personal data concerning him or her for such marketing. This applies to profiling to the extent that it is related to such direct marketing. If the data subject objects to Onor to the processing for direct marketing purposes, Onor will no longer process the personal data for these purposes.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>In addition, the data subject has the right, on grounds relating to his or her particular situation, to object to the processing of personal data concerning him or her by Onor for scientific or historical research purposes, or for statistical purposes pursuant to Article 89(1) of the GDPR, unless the processing is necessary for the performance of a task carried out for reasons of public interest.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>In order to exercise the right to object, the data subject may directly contact the Data Protection Officer of Onor or another employee. In addition, the data subject is free in the context of the use of information society services, and notwithstanding Directive 2002/58/EC, to use his or her right to object by automated means using technical specifications.</p>
            <ol start={5}>
                <ol start={8} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Automated individual decision-making, including profiling</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Each data subject shall have the right granted by the European legislator not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning him or her, or similarly significantly affects him or her, as long as the decision (1) is not is necessary for entering into, or the performance of, a contract between the data subject and a data controller, or (2) is not authorized by Union or Member State law to which the controller is subject and which also lays down suitable measures to safeguard the data subject’s rights and freedoms and legitimate interests, or (3) is not based on the data subject’s explicit consent.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>If the decision (1) is necessary for entering into, or the performance of, a contract between the data subject and a data controller, or (2) it is based on the data subject’s explicit consent, Onor shall implement suitable measures to safeguard the data subject’s rights and freedoms and legitimate interests, at least the right to obtain human intervention on the part of the controller, to express his or her point of view and contest the decision.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>If the data subject wishes to exercise the rights concerning automated individual decision-making, he or she may at any time directly contact our Data Protection Officer of Onor or another employee of the controller.</p>
            <ol start={5}>
                <ol start={9} type="A">
                    <li>
                        <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}>Right to withdraw data protection consent</p>
                    </li>
                </ol>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Each data subject shall have the right granted by the European legislator to withdraw his or her consent to the processing of his or her personal data at any time.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>If the data subject wishes to exercise the right to withdraw the consent, he or she may at any time directly contact our Data Protection Officer of Onor or another employee of the controller.</p>
            <ol start={14}>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>CCPA PROVISO (APPLIES TO CALIFORNIA RESIDENTS ONLY)</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The California Code of Regulations defines a "resident" as:</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>every individual who is in the State of California for other than a temporary or transitory purpose and</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>All other individuals are defined as "non-residents."</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>If this definition of "resident" applies to you, certain rights and obligations apply regarding your personal information.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided in this document.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>9- To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Platform, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).</p>
            <ol start={15}>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>Security</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm' }}>This Platform ensures that data is encrypted when leaving the Platform. This process involves the converting of information or data into a code to prevent unauthorised access. This Platform follows this process and employs secure methods to ensure the protection of all credit and debit card transactions. Encryption methods such as SSL are utilised to protect customer data when in transit to and from this Platform over a secure communications channel.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm' }}>Whilst we do everything within our power to ensure that personal data is protected at all times from our Platform, we cannot guarantee the security and integrity of the information that has been transmitted to our Platform.</p>
            <ol start={16}>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>Data protection provisions about the application and use of Google-Maps</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Our Platform uses Google Maps to display our location and to provide directions. This is a service provided by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland (hereinafter: Google).</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Through certification according to the EU-US Privacy Shield</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}><a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"><u>https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active</u></a></p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Google guarantees that it will follow the EU’s data protection regulations when processing data in the United States.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>If you access the Google Maps components integrated into our Platform, Google will store a cookie on your device via your browser. Your user settings and data are processed to display our location and create a route description.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>By connecting to Google in this way, Google can determine from which website your request has been sent and to which IP address the directions are transmitted.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>If you do not agree to this processing, you have the option of preventing the installation of cookies by making the appropriate settings in your browser.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>In addition, the use of Google Maps and the information obtained via Google Maps is governed by the Google Terms of Use (<a href="https://policies.google.com/terms?gl=DE&hl=en"><u>https://policies.google.com/terms?gl=DE&amp;hl=en</u></a>) and the Terms and Conditions for Google Maps (<a href="https://www.google.com/intl/de_de/help/terms_maps.html"><u>https://www.google.com/intl/de_de/help/terms_maps.html</u></a>).</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Google also offers further information at</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}><a href="https://adssettings.google.com/authenticated"><u>https://adssettings.google.com/authenticated</u></a></p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}><a href="https://policies.google.com/privacy"><u>https://policies.google.com/privacy</u></a></p>
            <ol start={17}>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>Legal basis for the processing</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Art. 6(1) lit. a GDPR serves as the legal basis for processing operations for which we obtain consent for a specific processing purpose. If the processing of personal data is necessary for the performance of a contract to which the data subject is party, as is the case, for example, when processing operations are necessary for the supply of goods or to provide any other service, the processing is based on Article 6(1) lit. b GDPR. The same applies to such processing operations, which are necessary for carrying out pre-contractual measures, for example, in the case of inquiries concerning our services. Is our company subject to a legal obligation by which processing of personal data is required, such as for the fulfillment of tax obligations, the processing is based on Art. 6(1) lit. c GDPR. In rare cases, the processing of personal data may be necessary to protect the vital interests of the data subject or another natural person. Then the processing would be based on Art. 6(1) lit. d GDPR. Finally, processing operations could be based on Article 6(1) lit. f GDPR. This legal basis is used for processing operations which are not covered by any of the abovementioned legal grounds, if the processing is necessary for the purposes of the legitimate interests pursued by our company or by a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject which require protection of personal data. Such processing operations are particularly permissible because they have been specifically mentioned by the European legislator. He considered that a legitimate interest could be assumed if the data subject is a client of the controller (Recital 47 Sentence 2 GDPR).</p>
            <ol start={18}>
                <li>
                    <h1 style={{ textIndent: '-1.25cm', marginTop: '0cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>The legitimate interests pursued by the controller or by a third party</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Where the processing of personal data is based on Article 6(1) lit, f GDPR our legitimate interest is to carry out our business in favor of the well-being of all our employees and the shareholders.</p>
            <ol start={5}>
                <li>
                    <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}><strong>Period for which the personal data will be stored</strong></p>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>The criteria used to determine the period of storage of personal data is the respective statutory retention period. After the expiration of that period, the corresponding data is routinely deleted, as long as it is no longer necessary for the fulfillment of the contract or the initiation of a contract. If the data subject requests for termination or terminates their Platform Account, the personal data shall be retained for a period of 90 days from the date of termination.</p>
            <ol start={5}>
                <li>
                    <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent', marginTop: '0.21cm', border: 'none', padding: '0cm' }}><strong>Provision of personal data as a statutory or contractual requirement; Requirement necessary to enter into a contract; Obligation of the data subject to provide the personal data; possible consequences of failure to provide such data</strong></p>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>We clarify that the provision of personal data is partly required by law (e.g., tax regulations) or can also result from contractual provisions (e.g., information on the contractual partner). Sometimes it may be necessary to conclude a contract that the data subject provides us with personal data, which must subsequently be processed by us. The data subject is, for example, obliged to provide us with personal data when our company signs a contract with him or her. The non-provision of the personal data would have the consequence that the contract with the data subject could not be concluded. Before personal data is provided by the data subject, the data subject must contact our Data Protection Officer. Our Data Protection Officer clarifies to the data subject whether the provision of the personal data is required by law, contract, or is necessary for the conclusion of the contract, whether there is an obligation to provide the personal data and the consequences of non-provision of the personal data.</p>
            <ol start={5}>
                <li>
                    <h1 style={{ textIndent: '0cm', marginTop: '0.21cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>Children’s Information</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Another part of our priority is adding protection for children while using the Internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>Onor does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our Platform, we strongly encourage you to contact us immediately, and we will do our best to promptly remove such information from our records.</p>
            <ol start={5}>
                <li>
                    <h1 style={{ textIndent: '0cm', marginTop: '0.21cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>Online Privacy Policy Only</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>This Privacy Policy applies only to our online activities and is valid for visitors to our Platform with regards to the information that they shared and/or collect in Onor. This policy is not applicable to any information collected offline or via channels other than this Platform.</p>
            <ol start={5}>
                <li>
                    <h1 style={{ textIndent: '0cm', marginTop: '0.21cm', marginBottom: '0.21cm', color: '#000000', lineHeight: '150%', textAlign: 'justify', background: 'transparent', fontWeight: 'bold' }}>&nbsp;Changes to this policy</h1>
                </li>
            </ol>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>At our discretion, we may change our Privacy Policy to reflect current acceptable practices. We will take reasonable steps to let users know about changes via our Platform. Your continued use of this Platform after any changes to this policy will be regarded as acceptance of our practices around privacy and personal information.</p>
            <p style={{ marginBottom: '0.21cm', lineHeight: '150%', textAlign: 'justify', background: 'transparent' }}>If we make a notable change to this Privacy Policy, for example, changing a lawful basis on which we process your personal information, we will ask you to re-consent to the amended Privacy Policy.</p>
            <ol start={5}>
                <li />
            </ol>
        </div>
    )

    const privacy_jsx = (
        <React.Fragment>
            <h4 className="mycol header_h4 mt-xl-2 mb-xl-5">Privacy &amp; Policy</h4>
            <Row className={'d-flex justify-content-center'}>
                <Col sm={12} xs={12}>
                    {PrivacyContent}
                </Col>
            </Row>
            {/* {
                props.auth.isAuthorized &&
                <Row className={'mt-2'}>
                    <Col sm={12}>
                        <Button onClick={e => {
                            props.history.push("/user/preferences/")
                        }} variant="" className="onor_secondery_btn float-right">Back</Button>
                    </Col>
                </Row>
            } */}
        </React.Fragment>
    )
    return (
        <React.Fragment>
            <div className="mt-3"></div>
            <Container>
                {privacy_jsx}
            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        dialog: state.dialog,
        chatDialog: state.chatDialog,
    };
};
export default connect(mapStateToProps)(TermsOfService)