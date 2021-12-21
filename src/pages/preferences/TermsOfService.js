import React from 'react'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import './TermsOfService.scss'

const TermsOfService = (props) => {

    const TermsContent = (
        <>
            <div>
                <p align="center"><span style={{ fontSize: 'xx-large' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'large' }}><strong>Terms and conditions</strong></span></span></span></p>
                <p align="center"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'small' }}>Last Updated: Friday, February 4, 2021</span></span></p>
                <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>LEGAL NOTICE: </span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'small' }}>PLEASE READ THIS AGREEMENT CAREFULLY TO ENSURE THAT YOU UNDERSTAND EACH PROVISION. YOU UNDERSTA</span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'small' }}>ND AND AGREE THAT ONOR IS NOT A PARTY TO ANY AGREEMENTS ENTERED INTO BY FREELANCERS / SELLERS AND BUYERS, COLLECTIVELY USERS, NOR D</span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'small' }}>OES ONOR PERFORM MAKEUP OR OTHER SERVICES ADVERTISED ON THE PLATFORM. ONOR HAS NO CONTROL OVER THE CONDUCT OF SELLERS OR BUYERS AND OTHER USERS OF THE SERVICE AND DISCLAIMS ALL LIABILITY IN THIS REGARD. THIS AGREEMENT CONTAINS A MANDATORY ARBITRATION OF DISPUTES PROVISION THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS, AND ALSO LIMITS THE REMEDIES AVAILABLE TO YOU IN THE EVENT OF A DISPUTE.THIS AGREEMENT CONTAINS A CLASS ACTION/JURY TRIAL WAIVER PROVISION THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS.</span></span></p>
                <p align="center"><br /> </p>
                <p align="center"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>TABLE OF CONTENTS</span></span></p>
                <div id="Table of Contents1" dir="ltr">
                    <p><a href="#_gjdgxs"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>INTRODUCTION 3</strong></em></span></span></a></p>
                    <p><a href="#_30j0zll"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>1</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>DEFINITIONS 3</strong></em></span></span></p>
                    <p><a href="#_1fob9te"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>2</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>PLATFORM USAGE 4</strong></em></span></span></p>
                    <p><a href="#_3znysh7"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>3</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>ACCOUNT REGISTRATION 4</strong></em></span></span></p>
                    <p><a href="#_2et92p0"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>4</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>IDENTITY AND LOCATION VERIFICATION 5</strong></em></span></span></p>
                    <p><a href="#_tyjcwt"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>5</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>LICENSE 7</strong></em></span></span></p>
                    <p><a href="#_3dy6vkm"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>6</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>TERM 7</strong></em></span></span></p>
                    <p><a href="#_1t3h5sf"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>7</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>ELIGIBILITY 7</strong></em></span></span></p>
                    <p><a href="#_4d34og8"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>8</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>HOW IT WORKS 8</strong></em></span></span></p>
                    <p><a href="#_2s8eyo1"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>9</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>MEMBERSHIP FEES 11</strong></em></span></span></p>
                    <p><a href="#_17dp8vu"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>10</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>TERMS FOR THE CLIENTS 11</strong></em></span></span></p>
                    <p><a href="#_3rdcrjn"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>11</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>CLIENTS REPRESENTATIONS AND WARRANTIES 13</strong></em></span></span></p>
                    <p><a href="#_26in1rg"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>12</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>TERMS FOR THE FREELANCER 14</strong></em></span></span></p>
                    <p><a href="#_lnxbz9"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>13</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>FREELANCER REPRESENTATIONS AND WARRANTIES 15</strong></em></span></span></p>
                    <p><a href="#_35nkun2"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>14</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>AGREEMENT BETWEEN CLIENT AND FREELANCER 16</strong></em></span></span></p>
                    <p><a href="#_1ksv4uv"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>15</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>USER GENERATED CONTENT 17</strong></em></span></span></p>
                    <p><a href="#_44sinio"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>16</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>NO DIRECT CONTACT OUTSIDE THE PLATFORM 18</strong></em></span></span></p>
                    <p><a href="#_2jxsxqh"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>17</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>RATING SYSTEM 18</strong></em></span></span></p>
                    <p><a href="#_z337ya"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>18</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>PERSONAL DATA 19</strong></em></span></span></p>
                    <p><a href="#_3j2qqm3"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>19</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>CLAIMS FOR COPYRIGHT INFRINGEMENT 19</strong></em></span></span></p>
                    <p><a href="#_1y810tw"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>20</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>TASK MODIFICATIONS AND CANCELLATIONS[OPTIONAL] 19</strong></em></span></span></p>
                    <p><a href="#_4i7ojhp"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>21</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>ESCROW SERVICES 19</strong></em></span></span></p>
                    <p><a href="#_1ci93xb"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>22</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>CURRENCY CONVERSION 20</strong></em></span></span></p>
                    <p><a href="#_3whwml4"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>23</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>NO INTEREST 20</strong></em></span></span></p>
                    <p><a href="#_2bn6wsx"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>24</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>ACCESS OF PERSONAL DATA OUTSIDE THE USA 20</strong></em></span></span></p>
                    <p><a href="#_qsh70q"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>25</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>INTELLECTUAL PROPERTY 21</strong></em></span></span></p>
                    <p><a href="#_3as4poj"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>26</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>THIRD-PARTY SERVICES 23</strong></em></span></span></p>
                    <p><a href="#_1pxezwc"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>27</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>ALLOWED USES OF PLATFORM 23</strong></em></span></span></p>
                    <p><a href="#_49x2ik5"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>28</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>PROHIBITED ACTIVITIES 24</strong></em></span></span></p>
                    <p><a href="#_2p2csry"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>29</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>UNITED STATES LEGAL COMPLIANCE 26</strong></em></span></span></p>
                    <p><a href="#_147n2zr"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>30</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>TERMINATION 26</strong></em></span></span></p>
                    <p><a href="#_3o7alnk"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>31</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>RELEASE 27</strong></em></span></span></p>
                    <p><a href="#_23ckvvd"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>32</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>WARRANTY DISCLAIMER 27</strong></em></span></span></p>
                    <p><a href="#_ihv636"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>33</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>INDEMNIFICATION 28</strong></em></span></span></p>
                    <p><a href="#_32hioqz"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>34</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>LIMITATION OF LIABILITY 29</strong></em></span></span></p>
                    <p><a href="#_1hmsyys"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>35</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>MODIFICATION 30</strong></em></span></span></p>
                    <p><a href="#_41mghml"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>36</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>CHOICE OF LAW 30</strong></em></span></span></p>
                    <p><a href="#_2grqrue"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>37</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>MISCELLANEOUS 30</strong></em></span></span></p>
                    <p><a href="#_vx1227"><span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>38</strong></em></span></span></a> <span style={{ fontFamily: 'Calibri, serif' }}><span style={{ fontSize: 'medium' }}><em><strong>NOTICES 32</strong></em></span></span></p>
                    <p><span style={{ fontFamily: 'Calibri, serif' }}><em><strong>39 SELLER’S TERMS</strong></em></span></p>
                    <p><span style={{ fontFamily: 'Calibri, serif' }}><em><strong>40 BUYER’S TERMS</strong></em></span></p>
                </div>
                <p><br /> </p>
                <h1 align="justify"><a name="_gjdgxs" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>INTRODUCTION</strong></span></span></h1>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Welcome to Onor Services LLC. We are a company based in the USA. These Terms and Conditions regulate the use and access of the Onor platform, and the services offered through the Onor platform (“Platform”). For the sake of convenience, the term Platform shall also include the services offered through the Platform.</span></span></p>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>These Terms and Conditions, along with the </span></span><span style={{ color: '#4472c4' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Privacy Policy</span></span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>, </span></span><span style={{ color: '#4472c4' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Code of Conduct, Onor Coins Policy </span></span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>(Collectively “Terms”) set out the legal obligation vis-à-vis terms and conditions for your interaction and usage of the Platform. By clicking “Accept” when prompted on the Platform or making an Account or, using or accessing the Platform, you understand that you will adhere to these Terms and all other operating rules, policies, and procedures that may be issued periodically on the Platform by us, each of which is incorporated by reference periodically by us. If you do not agree to any of these Terms, please do not use or access the Platform.</span></span></p>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>By accepting these Terms, you agree that the Terms constitute a binding contract, effective as of the date of first acceptance by you, between Onor Services LLC. (hereinafter referred to as “Onor”, “we”, “us”, or “our”) and you the user (hereinafter referred to as “user”, “you”, “your”, “seller”, “freelancer”, “buyer”) (each a “Party” to the contract and collectively, the “Parties”).</span></span></p>
                <ol>
                    <li>
                        <h1 align="justify"><a name="_30j0zll" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>DEFINITIONS</strong></span></span></h1>
                        <ol>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>Account(s):</strong></span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}> The user account created by the users of the Platform</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>Client / Buyer:</strong></span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}> A Client and/or Buyer shall be any User of the Onor Platform, in any manner, including but not limited to those who register on the Platform and/or solicits Freelancer services, for which services may be compensated or not (i.e. free consultations). Both terms have been used interchangeably in this document.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>Freelancer(s) / Seller (s):</strong></span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}> User who registers on the Platform as a service provider, to be hired by the Clients. And then is subsequently approved by the platform, based on set procedure, to advertise their services on the platform. Both terms have been used interchangeably in this document. The user is not licensed by any Government or State Agencies. No representations, warranties, or guarantees of quality of services are made by Onor. The evaluation criteria to assess Freelancers for the Onor platform may include:</span></span></h2>
                            </li>
                        </ol>
                    </li>
                </ol>
                <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>(1) Certification / Experience: A total of 10 points in total. If a Freelancer does not have relevant certification they can make it up with relevant experience</span></span></span></h3>
                <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>(2) Evaluation Session: A total of 40 points </span></span></span></h3>
                <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>a. Subject Matter Expertise displayed during the session</span></span></span></h3>
                <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>b. Client Engagement during session</span></span></span></h3>
                <h3 align="justify"><a name="_r3p0cn9x1id1" /> <span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>c. Pacing of session</span></span></span></h3>
                <h3 align="justify"><a name="_pmmi3z1j2di7" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>d. Were expectations of session met </span></span></h3>
                <ol>
                    <ol start={4}>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>Freelancer Services:</strong></span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}> Services offered by a Freelancer / seller. </span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>Task: </strong></span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>A Task is an opportunity created by a Client which is subsequently completed by the Freelancers of the Client’s choice. A Task creates a contractual relationship between the Client and the respective Freelancer. Onor or any of its representatives are not a party to such a contractual relationship. </span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>User:</strong></span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}> A User as herein referred to, shall be any user of the Onor Platform, in any manner, and/or any user who creates an Account on our Platform (includes both Clients and Freelancers). </span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>User Content:</strong></span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}> Means any comments, remarks, data, feedback, content, text, photographs, images, video, music, or other information that any user posts to or creates as a result of an interaction (commercial or otherwise) on any part of the Platform. </span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>You:</strong></span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}> Includes both Client and Freelancer. </span></span></h2>
                        </li>
                    </ol>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Besides the definitions contained in this section, the Terms may contain definitions throughout the main body of the Terms.</span></span></p>
                <ol start={2}>
                    <li>
                        <h1 align="justify"><a name="_1fob9te" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>PLATFORM USAGE</strong></span></span></h1>
                        <ol>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>You hereby, through this reference, agree to comply with these Terms when accessing/using the Platform. A limited right is granted to you for accessing/using the Platform. This right is available as long as you adhere to our Terms. Onor may revoke this right at any time for any reason.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>We strive to keep our Platform available for you to use 24x7. We also ensure that our Platform shall be accessible and secure always, however, we cannot guarantee the perpetual accessibility/availability of Platform. We may cease to provide or make available certain features of our Platform without any notice to you.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>We may repeal the limited right granted to you concerning the use/access to the Platform by providing notice to you. The rescission of right shall be effective immediately upon us providing such notice.</span></span></h2>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h1 align="justify"><a name="_3znysh7" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>ACCOUNT REGISTRATION</strong></span></span></h1>
                        <ol>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>To access the Platform, you need to register for a user Account on the Platform. For continuous access to our Platform it is suggested that you provide us with accurate, complete, and updated information wherever applicable. Failing to meet the aforesaid condition may result in the suspension of the respective user Account. User represents that the information is accurate, complete, and updated and not for the purpose to defraud or deceive. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>You agree not to (1) misrepresent yourself as someone else by selecting or using a username a name, e-mail, or phone number of another person; (2) use, as a username, an offensive, vulgar, or obscene name; (3) use as a username a fictitious name or pseudonym. User hereby agrees to indemnify Onor for any damages, costs, and / or expenses that arise as a result of User’s breach.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>You are solely liable and responsible for any activity that occurs on your Account. You agree and understand that you shall not share your user Account password with anybody or do any such act which promotes unauthorized use of your user Account. You shall take all measures to protect your password, including but not limited to restricting the use of your personal device. Onor is not responsible for the theft or misuse of personal, confidential, and /or financial information of User as a result of the User’s breach.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>You must notify us immediately&nbsp;on our Platform&nbsp;of any change in your eligibility to use the Platform, breach of security, or unauthorized use of your Account. You shall have the ability to delete your Account, either through the Platform or through a request made&nbsp;on our Platform. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>You understand and agree that by creating a user Account you agree to receive communication concerning marketing e-mails and SMS from us. You understand and agree that any communication or notification you receive from us electronically shall qualify as legal notice and meet all the legal notice requirements. You further understand and consent that Onor may collect and / or use your private and / or confidential information. </span></span></h2>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h1 align="justify"><a name="_2et92p0" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>IDENTITY AND LOCATION VERIFICATION</strong></span></span></h1>
                        <ol>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Identity verification</span></span></h2>
                            </li>
                        </ol>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>At the time of sign up, Onor will require that you submit information so that we may be able to verify your identity. In order to verify your identity, we may require the following information which may include without limitations, your state identification information valid government-issued ID card, recent utility bills or bank statements etc.</span></span></p>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The verification process is important as it helps to prevent fraud, money laundering, and the financing of terrorism. We also require that you go through the verification process for complying with the terms of the service providers and payments processor engaged by Onor. The verification of users may be done by Onor through an established third-party service provider. We will need to transfer your Personal Data to said third party provider for verifying your identity. To know more about the privacy practices of third party providers please read our </span></span><span style={{ color: '#4472c4' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Privacy Policy</span></span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>. Users consent to the disclosure of confidential and / or private information to third party(ies). </span></span></p>
                <ol>
                    <ol start={2}>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Location Verification</span></span></h2>
                        </li>
                    </ol>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>We may require that you provide us your geo-location information so that we may ascertain your location. To collect your geo-location information, we use third party APIs like Google Maps. Collecting your location information is important so that we can maintain a safer and secure online workplace for all Platform users. Please read our Privacy Policy (linked above) to know more about the API “Google Maps”.</span></span></p>
                <ol>
                    <ol start={3}>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Consequences of failing to provide correct information/ failing verification:</span></span></h2>
                        </li>
                    </ol>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>If you do not provide correct and / or accurate information and / or are unable to pass verification, Onor may place an Account limitation or terminate your Account as a security measure.</span></span></p>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Falsifying your identity is a crime. Onor may report users that provide false documentation to appropriate authorities.</span></span></p>
                <ol>
                    <ol start={4}>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>DISCLAIMER</span></span></h2>
                        </li>
                    </ol>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>USER(S) CONSENT TO THE USE OF THIRD PARTY SERVICES TO VERIFY ANY INFORMATION, BACKGROUND, OR STANDARDS. ONOR MAY CONTRACT WITH THIRD PARTIES FOR THE PURPOSE OF VERIFICATION. USER RELEASES AND WAIVES ANY CLAIMS AGAINST ONOR RELATING TO THE USE OF ANY THIRD PARTY SERVICE PROVIDER.</span></span></p>
                <ol start={5}>
                    <li>
                        <h1 align="justify"><a name="_tyjcwt" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>LICENSE</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Subject to the Terms, Onor gives you a limited, revocable, non-sublicensable, non-exclusive, and non-transferable license to the Platform and Platform Content only for purposes of using the Platform in accordance with these Terms. It is expressly prohibited without the prior express permission from Onor to use, reproduce, modify, distribute, or store any Platform Content for purposes other than using the Platform consistent with these Terms.</span></span></p>
                <ol start={6}>
                    <li>
                        <h1 align="justify"><a name="_3dy6vkm" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>TERM</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Term of these Terms begins as soon as you access the Platform and continues as long as you use the Platform. By accessing the Platform, creating an Account, and clicking “accept” whenever prompted means that you’ve officially “signed” these Terms.</span></span></p>
                <ol start={7}>
                    <li>
                        <h1 align="justify"><a name="_1t3h5sf" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>ELIGIBILITY</strong></span></span></h1>
                        <ol>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>To use our Platform, you must:</span></span></h2>
                                <ol>
                                    <li>
                                        <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Be at least of the age of majority as per your local laws and not disqualified from entering into contracts under any law;</span></span></span></h3>
                                    </li>
                                    <li>
                                        <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Complete the registration process; </span></span></span></h3>
                                    </li>
                                    <li>
                                        <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Agree to our Terms; and</span></span></span></h3>
                                    </li>
                                    <li>
                                        <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Provide true, complete, and up to date legal and contact information </span></span></span></h3>
                                    </li>
                                    <li>
                                        <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>You represent and warrant that you have the authority to accept these Terms on behalf of the company you may be affiliated with.</span></span></span></h3>
                                    </li>
                                    <li>
                                        <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>By using Platform, you represent and warrant that you will use Platform for only legitimate purposes.</span></span></span></h3>
                                    </li>
                                    <li>
                                        <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>By using Platform, you represent and warrant that you meet all the requirements listed above and that you will not use Platform in a way that violates any laws or regulations. Onor may refuse service, close Accounts of any users, and change eligibility requirements at any time.</span></span></span></h3>
                                    </li>
                                    <li>
                                        <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>By accepting these Terms, you represent and warrant that you are qualified concerning the conditions stated herein, therefore, are permitted to use the Platform. If you do not meet any of the conditions stated herein you shall not access/use the Platform and must cease to be a user.</span></span></span></h3>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The user may be asked while registering and creating an Account on Platform to submit their information including (without limits) their cell phone number, e-mail address, date of birth, location or address, and payment details which include bank account details, card details, business information, areas of specialization and other financial details required for making payment on the Platform as well as any information for tax purposes. Where applicable, the users will provide their e-mail address issued by their respective educational institutions and universities. For more information about our privacy practices, please read our </span></span><span style={{ color: '#4472c4' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Privacy Policy.</span></span></span></h2>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h1 align="justify"><a name="_4d34og8" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>HOW IT WORKS</strong></span></span></h1>
                        <ol>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Overview</span></span></h2>
                                <ol>
                                    <li>
                                        <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Clients can create a Task through the Platform subject to their upfront payment of appropriate fees to us as specified on the Platform.</span></span></span></h3>
                                    </li>
                                    <li>
                                        <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Clients can also purchase Freelancer Services from their relevant profile page. Freelancers also have the ability to create custom Freelancer Services.</span></span></span></h3>
                                    </li>
                                    <li>
                                        <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers must fulfill their accepted Tasks and shall not cancel any Tasks on a consistent basis or without cause. In the event Freelancers cancel their Tasks on a consistent basis or without cause, it will have a negative impact on such Freelancer’s ratings.</span></span></span></h3>
                                    </li>
                                    <li>
                                        <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Clients and Freelancers are not permitted to offer or accept payments using any payment methods other than the payment methods indicated on the Platform. In the event we find any users violating this Section, it will attract appropriate action in our discretion which may also result in termination of these Terms between you and us and, termination of your Account. Users shall only correspond and contract on the platform.</span></span></span></h3>
                                    </li>
                                    <li>
                                        <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>We retain the right to use all published delivered works for Platform marketing and promotion purposes. Any content you post to the Platform will be considered non-confidential and non-proprietary. By providing any content on the Platform, you grant us and our affiliates and service providers, and each of their and our respective licensees, successors, and assigns the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material for the sole purpose of marketing and promotions.</span></span></span></h3>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancer Basics</span></span></h2>
                                <ol>
                                    <li>
                                        <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers need to be approved by the platform to be approved sellers. The approval process might include, but not be limited to, telephonic interviews, referrals checks and evaluation sessions. Freelancers are not licensed by any Government or State Agencies. No representations, warranties, or guarantees of quality of services are made by Onor. The evaluation criteria to assess Freelancers for the Onor platform may include:</span></span></span></h3>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                </ol>
                <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>(1) Certification / Experience: A total of 10 points in total. If a Freelancer does not have relevant certification they can make it up with relevant experience</span></span></span></h3>
                <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>(2) Evaluation Session: A total of 40 points </span></span></span></h3>
                <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>a. Subject Matter Expertise displayed during the session</span></span></span></h3>
                <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>b. Client Engagement during session</span></span></span></h3>
                <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>c. Pacing of session</span></span></span></h3>
                <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>d. Were expectations of session met</span></span></span></h3>
                <ol>
                    <ol>
                        <ol start={2}>
                            <li>
                                <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Once approved, Freelancers will have the ability to create templates indicating their Freelancer Service offerings through the Platform which allow Clients to view a Freelancer’s Freelancer Service and accordingly purchase them.</span></span></span></h3>
                            </li>
                            <li>
                                <h3><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers can also offer custom Freelancer Services in addition to their generic Freelancer Services being offered through templates.</span></span></span></h3>
                            </li>
                            <li>
                                <h3><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Upon every successful completion of a Freelancer’s Task, a Freelancer’s appropriate Account will be credited with not more than </span></span></span><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>80%</span></span></span><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}> derived from the net revenue of the cost of a particular Task.</span></span></span></h3>
                            </li>
                            <li>
                                <h3><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Platform credits a Freelancer’s appropriate Account as soon as possible but in not less than </span></span></span><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>21 days</span></span></span><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}> once a Task is considered as “complete” or similar synonyms to the term “complete” that may be used on the Platform.</span></span></span></h3>
                            </li>
                            <li>
                                <h3><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers hereby warrant and represent not to promote, display and otherwise share their Tasks and other content generated with respect to a particular Task outside the Platform without the explicit written permission of the appropriate owner of the IP in such Task as it shall be considered as intellectual property rights infringement to do so.</span></span></span></h3>
                            </li>
                            <li>
                                <h3><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers hereby through this reference agree to maintain a general liability insurance cover having coverage amounts sufficient to cover all risks associated with the performance of their Freelancer Services and relevant Tasks. Onor may from time to time request Proof of Liability Insurance. Failure to provide proof of Insurance may result in breach of these terms and subject to removal from the platform.</span></span></span></h3>
                            </li>
                        </ol>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Custom Offers</span></span></h2>
                            <ol>
                                <li>
                                    <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers will be able to create custom offers that address a specific Client’s requirements. These custom offers will contain the exact description of the Freelancer Services as well as the time and the cost required to “complete” the Task.</span></span></span></h3>
                                </li>
                                <li>
                                    <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers can send custom offers from the Platform “conversation page”.</span></span></span></h3>
                                </li>
                                <li>
                                    <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>All such custom offers shall be in consonance with our Terms.</span></span></span></h3>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Handling Orders</span></span></h2>
                            <ol>
                                <li>
                                    <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>When a Client orders/books a Freelancer Service, the Freelancer is notified via registered email and other permitted notification methods when a Freelancer is logged in to the Platform on their device.</span></span></span></h3>
                                </li>
                                <li>
                                    <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers are required to complete their Tasks on or before the specified delivery date associated with the Tasks. Failing to do so may result in the relevant Client cancelling the Task when a Task is marked as “late” by the Platform. Failing to complete Tasks on time will negatively impact the rating of the Freelancer. Failing to complete Tasks on time may result in breach of these terms and subject to removal from the platform.</span></span></span></h3>
                                </li>
                                <li>
                                    <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers can send their completed Task files and/or proof of work using the “Deliver Completed Work” button (located on the Order page) to mark the Task as Delivered.</span></span></span></h3>
                                </li>
                                <li>
                                    <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Users are responsible for scanning all files shared through the Platform. We shall not be liable for any viruses and malware transmitted through user files or any related data breaches or misappropriation of confidential information.</span></span></span></h3>
                                </li>
                                <li>
                                    <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Clients may use the "Request Revisions" feature located on the “Order Page” while a Task is marked as “Delivered” in the event the delivered materials do not match the Freelancer’s description of the Freelancer Services on their “Offer Page” or they do not match the requirements sent to the Client at the beginning of the Task order process. Mis-use of the “request revisions” feature may be considered breach of these terms and may result in breach of these terms and subject to removal from the platform. The number of modifications and / or revisions permitted shall be identified in the Tasks or Sessions. </span></span></span></h3>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </ol>
                <p><span style={{ color: '#0000ff' }}><span style={{ fontSize: 'xx-small' }}>LIKEWISE, FREELANCER IS NOT PERMITTED TO ABUSE THE DELIVERY OPTION IN ANY WAY, INCLUDING BUT NOT LIMITED TO SUBMIT DELIVERY PRIOR TO COMPLETION OF THE TASK</span></span></p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <ol start={9}>
                    <li>
                        <h1 align="justify"><a name="_2s8eyo1" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>MEMBERSHIP FEES</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Onor can charge membership fees (prices and subscription plans as indicated on the Platform page “[</span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>ENTER URL</span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>]”) from our users for registration on the Platform (“Membership Fees”). The prices and plans indicated on the Platform are subject to change at any-time and we may notify our users of the change in prices and plans through appropriate means of communications. The Membership Fee charged is strictly non-refundable. We shall not be liable to refund any fees including Membership Fee remitted to Onor. You hereby represent and warrant that you shall not request for any refunds from Onor with respect to any fees or Membership Fee charged by us. Cancellation must be submitted in writing by emailing: Info@Onor.world.</span></span></p>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>If you decide to cancel your membership with us, you are free to do so at any time. This shall under no circumstance entitle you to any refunds from Onor. We do not charge any amounts for cancelling your memberships.</span></span></p>
                <ol start={10}>
                    <li>
                        <h1 align="justify"><a name="_17dp8vu" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>TERMS FOR THE CLIENTS </strong></span></span></h1>
                        <ol>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Clients can create Tasks on their Accounts. Subsequently, when a Task is created on the Platform, Freelancers can view created Tasks once they go live on the Platform.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>A Task may be removed by the Platform due to violation of these Terms, which may include (but are not limited to) the following violations and/or materials: </span></span></h2>
                            </li>
                        </ol>
                    </li>
                </ol>
                <ol type="a">
                    <li>
                        <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Illegal or Fraudulent requests </span></span></p>
                    </li>
                    <li>
                        <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Copyright Infringement, Trademark Infringement, and violation of a third party’s terms of service reported through our Intellectual Property Claims. </span></span></p>
                    </li>
                    <li>
                        <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Adult oriented requests, Prostitution, Pornographic, Inappropriate/Obscene. </span></span></p>
                    </li>
                    <li>
                        <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Intentional copies of Tasks. </span></span></p>
                    </li>
                    <li>
                        <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Spam, Nonsense, or violent Tasks. </span></span></p>
                    </li>
                    <li>
                        <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Tasks misleading to Freelancers. </span></span></p>
                    </li>
                    <li>
                        <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Reselling of regulated goods.</span></span></p>
                    </li>
                    <li>
                        <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Tasks containing any false or misleading information</span></span></p>
                    </li>
                    <li>
                        <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Any other reason which in our opinion violates the policies of the Platform. </span></span></p>
                    </li>
                </ol>
                <ol>
                    <ol>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Tasks that are removed for violations are not eligible to be restored or edited. </span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Tasks may be removed from our Search feature due to inferior performance and/or user misconduct; or for any other reasons that Onor may deem sufficient.</span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Clients understands and agrees that we may restrict the maximum number of Freelancers who may respond to a Task posted by the Clients on the Platform.</span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Clients shall not offer direct payments to Freelancers using third-party payment systems or payment systems outside of the Platform. All transactions between Clients and Freelancers must be performed on the platform, including those subsequent transactions that occur after the initial contracting between the parties. All transactions that stem from Client engaging with Freelancer shall be performed on the platform. </span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Onor retains the right to use all Platform published and or delivered Tasks for our marketing and promotional purposes.</span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>TO PROTECT AGAINST FRAUD, UNAUTHORIZED TRANSACTIONS (SUCH AS MONEY LAUNDERING), CLAIMS OR OTHER LIABILITIES, WE DO NOT COLLECT CREDIT INFORMATION; BUT ALLOW OUR PAYMENT VENDORS TO COLLECT INFORMATION FOR THE PURPOSE OF COLLECTING PAYMENTS FROM USERS ON THE PLATFORM OR TRANSFERRING PAYMENTS TO USERS ON THE PLATFORM. WE ARE NOT EXPOSED TO THE PAYMENT INFORMATION PROVIDED TO OUR PAYMENT VENDORS, AND THIS INFORMATION IS SUBJECT TO THE PRIVACY POLICY APPLICABLE TO THE PAYMENT VENDOR.</span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>ONOR IS NOT LIABLE FOR DATA BREACHES OR FOR THE MISAPPROPRIATION OF CONFIDENTIAL OR FINANCIAL INFORMATION. ONOR IS NOT LIABLE FOR ANY CLAIMS OR CAUSES OF ACTIONS AS A RESULT OF ANY CONDUCT OR ACTIONS BY THE THIRD PARTY VENDORS, AND CLIENT HEREBY WAIVES ANY RIGHTS AND RELEASES ANY LIABILITY OF ONOR RELATING THERETO. </span></span></h2>
                        </li>
                    </ol>
                    <li>
                        <h1 align="justify"><a name="_3rdcrjn" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>CLIENTS REPRESENTATIONS AND WARRANTIES</strong></span></span></h1>
                        <ol>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Clients shall engage Freelancers for various Tasks under different heads through the Platform. Clients represent that the purpose for which they hire the Freelancer is legitimate, lawful purposes only. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Clients understand and agree that they are responsible for all payments to the Freelancers. Payments are made through the Platform using Onor Escrow services (refer to Section 19 for more details on Onor Escrow services). These payments relate to Freelancer Services availed of by the Clients through this Platform and our third-party payment processors vendors. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Clients and Freelancers understand and agree they are responsible for paying any direct or indirect taxes, including any state or local taxes, which may apply to them depending on residency or location. The Tasks and prices listed on the Platform shall be inclusive of all such taxes and charges that may apply to the Clients/Freelancers unless specified by us otherwise in writing. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Clients understand and agree that they shall treat Freelancers as independent contractors, and the Clients are the only ones responsible for and assume all liability regarding the employment categorization of the Freelancers, including categorization as employees of the Clients. Clients agree and acknowledge that Onor has no control, supervision, direction, decision-making authority, for Freelancers and/or Freelancer’s personnel other than a Freelancer’s access and use of the Platform. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Clients agree and understand that Freelancers are not employees or agents of Onor. Freelancers and Clients are responsible for determining any contract terms between Client and Freelancer including without limitation pay rate, work hours, service dates, and working conditions. SAID TERMS ARE TO BE FULLY NEGOTIABLE BETWEEN CLIENTS AND FREELANCERS. ONOR HAS NO ROLE IN SETTING ANY TERMS OF THE SERVICES PROVIDED BY FREELANCERS TO CLIENTS. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Client agrees and understands to keep an active e-mail address and phone number and to make the aforesaid address or number available where applicable to Platform and Freelancer. Clients authorize Onor to share their contact information, which Onor has in its possession with Freelancers registered on this Platform. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Clients understand that Platform does not guarantee the accuracy and validity of any User Content. It does not vouch for any User Content posted on the Platform.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Clients represent and warrant to not engage with the Freelancers outside of the Platform. Doing so may result in permanent Account termination.</span></span></h2>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h1 align="justify"><a name="_26in1rg" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>TERMS FOR THE FREELANCER</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers offer Freelancer Services on the Platform.</span></span></p>
                <ol>
                    <ol>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers should provide a description of their skills and experience in their Freelancer Profile for Clients to review. Freelancers are required to upload a recent, accurate photo of themselves, so the Client can ensure their identity when providing a service. </span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers will not create multiple Accounts for the purposes of multiple applications to Tasks.</span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers understand and agree that Onor charges a commission not less than </span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>20%</span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}> of the Task order value before disbursing amounts due to the Freelancer. Transaction processing charges may apply by the payment processor(s) integrated on our Platform. FREELANCERS AGREE THAT IT WILL BE THE RESPONSIBILITY OF FREELANCER TO PAY ANY PROCESSING CHARGES AND ONOR IS NOT RESPONSIBLE FOR SAID CHARGES. </span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers agree to give a portion of their fees received from Clients to Onor. This fee is charged as service fees by us for using the Platform services, including (without limits) payment services, customer support, dispute resolution, invoicing services.</span></span></h2>
                        </li>
                    </ol>
                    <li>
                        <h1 align="justify"><a name="_lnxbz9" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>FREELANCER REPRESENTATIONS AND WARRANTIES</strong></span></span></h1>
                        <ol>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Platform is made available to Freelancer for commercial use unless Onor has agreed with you in a separate agreement. Freelancers agree that there is no employment relationship between Freelancer and Onor and that Freelancer will provide Freelancer Services on the Platform in the capacity of independent contractors. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers further agree that no agency, partnership, or joint venture is created as a result of these Terms or your provision of Freelancer Services to the Clients. Freelancer will not seek, and Onor shall not provide any supervision, directions, or control over the Freelancer Services offered to the Clients. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers will obtain and possess at their own cost and at all times while accessing and using the Platform the necessary approvals/licenses/tax registrations required to offer Freelancer Services to the Clients. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers have no authority to bind Onor in any respect except to the extent permissible by the Law.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Freelancers acknowledge and agree that Onor does not provide any Freelancer Services that Freelancer offer to Clients via the Platform and that Onor does not function as a provider of the particular Freelancer Services that Freelancers are offering to Clients. Onor is solely a Platform where Clients and Freelancer can be brought together and has no responsibility in the execution or provision of the Freelancer Services that the Freelancers provide to the Clients.</span></span></h2>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h1 align="justify"><a name="_35nkun2" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>AGREEMENT BETWEEN CLIENT AND FREELANCER </strong></span></span></h1>
                        <ol>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Clients and Freelancers shall enter into a contract (“Task Contract”) related to the performance of the Task for which Clients seek to hire the Freelancer. This Task Contract is an agreement entered between the Clients and Freelancer, which lays the terms and conditions of the Task/Task to be performed by the Freelancer for the Clients. The Task Contract is independent of Onor. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Clients and Freelancers have complete discretion in deciding whether they should enter into the Task Contract and also deciding conditions of the Task Contract. You understand that Onor is not a party to the Task Contract, and the Freelancers are not employees of Onor and / or agents of Onor. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Clients and Freelancers can enter into separate agreements, which may supplement and / or modify the Task Contract. These separate agreements may include but are not limited to confidentiality agreement, assignment of rights, etc. However, this separate agreement will not increase the responsibility of Platform and / or Onor than what it is responsible under the Terms.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Users understand that Platform is a facilitator which allows Clients and Freelancer to interact directly through this Platform. Platform does not find Tasks for Freelancers or find Freelancers for Clients. Freelancers may be notified of the Task requirements of the Clients vis-à-vis posts made by them and vice-versa. However, users are solely responsible for assessing the suitability of the Task and the Client/Freelancer. ONOR DOES NOT MAKE ANY GUARANTEES, WARRANTIES, AND/OR REPRESENTATIONS RELATING THERETO. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Client and the Freelancers shall clarify in the Task Contract any terms with respect to intellectual property in the Task deliverables. In the event such terms are not explicitly specified in a particular Task Contract, all Task deliverables shall be deemed as “work made for hire” under the United States Copyright Act 1976 (17 U.S.C. § 101).</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Onor shall not be liable for any amounts the users pay to each other as a result of using the Platform or otherwise. Onor shall not be responsible for any transactions done between the users pursuant to a Task Contract. Onor shall under no circumstances be liable to procure any refunds for any user of the Platform pursuant to a Task Contract. USERS' SOLE REMEDY SHALL BE AGAINST THE PARTIES TO THE TASK CONTRACT AND NOT ONOR. SUCH DISPUTES MAY BE RESOLVED THROUGH ONOR'S DISPUTE RESOLUTION PROCEDURES. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Task Contracts shall subsist even if Onor decides to terminate the agreement between Onor and the users. Notwithstanding anything in these Terms, the users (as applicable) shall be bound by the terms of a Task Contract even upon termination of the relationship between Onor and the users that arises as a result of these Terms.</span></span></h2>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h1 align="justify"><a name="_1ksv4uv" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>USER GENERATED CONTENT </strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Platform may include means by which you and other users may create, share content (“User Generated Content”). To the fullest extent permitted by applicable law, by submitting any User Generated Content you automatically grant (or represent and warrant that the owner of such rights has expressly granted) Onor a perpetual, worldwide, royalty-free, irrevocable, non-exclusive right and license to use, reproduce, modify, adapt, publish, translate, sub-license, create derivative works from and distribute such User Generated Content or incorporate such User Generated Content into any form, medium, or technology now known or later developed throughout the universe, and agree that we shall be entitled to unrestricted use of the User Generated Content for any purpose whatsoever, commercial or otherwise, without compensation, notice, or attribution. User waives and agrees not to assert against Onor or any of Onor’s partners, affiliates, subsidiaries, or licensees, any moral or similar rights User may have in any of User’s User Generated Content. To the extent the Platform permits other users to access and use User’s User Generated Content, User also grant such users the right to use, copy, modify, display, perform, create derivative works from, and otherwise communicate and distribute User’s User Generated Content on or through the Platform without further notice, attribution or compensation to you. User may only upload User’s own User Generated Content to the Platform; they may not upload anyone else’s User Generated Content. Onor reserves the right (but have no obligation) to remove, block, edit, move, or disable User Generated Content for any reason at our sole discretion. Onor is not responsible for and does not endorse or guarantee, the opinions, views, advice, or recommendations posted or sent by other users.</span></span></p>
                <ol start={16}>
                    <li>
                        <h1 align="justify"><a name="_44sinio" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>NO DIRECT CONTACT OUTSIDE THE PLATFORM</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The users of the Platform hereby represent and warrant that User shall not interact with each other outside the Platform for the sole purpose of circumventing including without limits, any fees, amounts, commissions or other dues payable to Onor. If Onor discovers or gets notified about any such instance, Onor may suspend or terminate the User’s Account. Onor reserves the right to take other appropriate actions available in law. </span></span></p>
                <ol start={17}>
                    <li>
                        <h1 align="justify"><a name="_2jxsxqh" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>RATING SYSTEM</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Our Platform incorporates a five-star rating system (“Rating System”) which the Clients can use to provide ratings for the Tasks done by the Freelancers registered on the Platform. The better the rating of a Freelancer, the more trustworthy a Freelancer becomes towards the Clients. Our Rating System is as follows:</span></span></p>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>5 Stars= Excellent</span></span></p>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>4 Stars= Very good</span></span></p>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>3 Stars= Satisfactory</span></span></p>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>2 Stars= Unsatisfactory</span></span></p>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>1 Star= Very unsatisfactory/ Bad service</span></span></p>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>If Freelancers think they may have received an unfair rating, please contact us at: info@Onor.World. Onor will, upon receipt of such complaint, investigate the issue and take appropriate actions at Onor’s sole discretion.</span></span></p>
                <ol start={18}>
                    <li>
                        <h1 align="justify"><a name="_z337ya" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>PERSONAL DATA</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>User agrees that User’s personal data is collected by Onor with User’s consent. Please refer to Onor’s </span></span><span style={{ color: '#4472c4' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Privacy Policy </span></span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>to know how Onor collects and uses User’s personal data.</span></span></p>
                <ol start={19}>
                    <li>
                        <h1 align="justify"><a name="_3j2qqm3" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>CLAIMS FOR COPYRIGHT INFRINGEMENT</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>All claims of copyright infringement shall be sent to info@Onor.World</span></span></p>
                <ol start={20}>
                    <li>
                        <h1 align="justify"><a name="_1y810tw" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>TASK MODIFICATIONS AND CANCELLATIONS</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>If a Task Contract is canceled by either the Client or the Freelancer or mutually after acceptance, Onor may charge a cancellation fee of not less than $5.0 (Five Dollars Only) in local currency equivalent to the Client.</span></span></p>
                <ol start={21}>
                    <li>
                        <h1 align="justify"><a name="_4i7ojhp" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>ESCROW SERVICES</strong></span></span></h1>
                        <ol>
                            <li>
                                <h2 align="justify"><a name="_2xcytpi" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>We may provide escrow services (“Onor Escrow”) to Users to accept/hold/ and or receive payment for any Order and to pay fees to the Platform.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Onor Escrow services shall receive, retain and release payments made according to terms stated herein and any applicable Escrow instructions if any. Onor Escrow services shall fulfill its obligations under these Terms of Service once it delivers the services to you according to these Terms.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Onor reserves the right to assign the rights, duties and obligations laid down in this section to third parties. You shall be informed through appropriate means if we appoint any third-party escrow service providers for the provision of the services currently provided by Onor Escrow.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>If we assign services of Onor Escrow to any third parties, the terms and conditions, privacy policies and other terms of such third party escrow service provider shall apply in addition to these Terms.</span></span></h2>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h1 align="justify"><a name="_1ci93xb" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>CURRENCY CONVERSION</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>If you incur charges on the Platform or receive/send other applicable amounts in a currency that is different from your Account's primary currency, your funds will be automatically converted to pay for them by our payment service providers.</span></span></p>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>You may incur conversion charges in such instance (“Conversion Charge”). Foreign currency conversion rates adjust regularly based on market conditions. Onor solely operates in USD (“Supported Currency”).</span></span></p>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The payment service provider selected by the users may also charge other fees even when currency conversion is not involved.</span></span></p>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>A user's authorization of a payment using a foreign currency conversion rate displayed on the Platform is solely at the User's risk. Onor, Onor Escrow, and our affiliates are not responsible for currency fluctuations that occur when billing or crediting your selected payment method denominated in a currency other than the Supported Currency. Onor, Onor Escrow, and our affiliates are not responsible for currency fluctuations that occur when receiving or sending payments to and from the Onor Escrow account. ONOR, ONOR ESCROW, AND OUR AFFILIATES ARE NOT RESPONSIBLE FOR ANY BANK SERVICE CHARGES AND/OR ESCROW SERVICES CHARGES OR FEES. SUCH CHARGES ARE THE RESPONSIBILITY OF USER. </span></span></p>
                <ol start={23}>
                    <li>
                        <h1 align="justify"><a name="_3whwml4" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>NO INTEREST</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>You are not entitled to any interest concerning any amount held, and / or received in your escrow account. [</span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>ENTER ESCROW SERVICE PROVIDER</span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>] Escrow services may charge or deduct fees with respect to services they provide.</span></span></p>
                <ol start={24}>
                    <li>
                        <h1 align="justify"><a name="_2bn6wsx" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>ACCESS OF PERSONAL DATA OUTSIDE THE USA</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>24.1 Onor may access and process user Personal Data outside the USA. We will always process user Personal Data in line with the provisions of the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA). Please read our Privacy Policy to know and understand further how we collect and use your Personal Data.</span></span></p>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>24.2 User shall comply with its obligations under Applicable Data Protection Law when processing personal data in accessing the Platform. In particular, User shall be individually responsible for ensuring that its processing of such personal data is lawful, fair and transparent, and shall make available to data subjects a privacy statement that fulfils the requirements of Applicable Data Protection Law. In this clause, "Applicable Data Protection Law" shall mean all applicable data privacy laws, regulations, and regulatory guidance in relation to the processing and protection of personal data, including (but not limited to) the Standards for the Protection of Personal Information of Residents of the Commonwealth of Massachusetts (201 CMR 17.00), the California Consumer Privacy Act of 2018, and other applicable United States privacy and data protection laws at the state and federal level, applicable Canadian data protection and anti-spam laws (such as the Personal Information Protection and Electronic Documents Act, Canada’s Anti-Spam Legislation) and European Regulation 2016/679 (also known as GDPR). In addition, in this clause ‘personal data’ and ‘data subject’ shall have the meanings given in Applicable Data Protection Law.</span></span></p>
                <ol start={25}>
                    <li>
                        <h1 align="justify"><a name="_qsh70q" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>INTELLECTUAL PROPERTY </strong></span></span></h1>
                        <ol>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Platform contains Intellectual Property of Onor in the form of content, graphics, videos, audios, text, and any other digital content (“Platform Content”). This is an agreement for the use of Platform, and you are not granted a license to any Platform Content under the Terms. Except to the extent that applicable laws prevent us from doing so, you will not, directly or indirectly: (i) reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code, object code, or underlying structure, ideas, or algorithms of, or found at or through the Platform; (ii) remove any proprietary notices or labels from the Platform Content; reproduce or copy the Platform Content or any part thereof; (iii) modify, translate, or create derivative works based on the Platform Content; (iv) copy, distribute, pledge, assign, or otherwise transfer or encumber rights to the Platform Content; (v) create any derivative product from any of the foregoing; (vi) without our express written permission, introduce automated agents or scripts to the Platform so as to produce multiple Accounts, generate automated searches, requests and queries, or to strip or mine data from the Platform; or (vii) allow third parties to gain access to the Platform or to Platform Content in any manner other than as expressly permitted in these Terms.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>You acknowledge and agree that the Platform, the names, and logos and all related product and names, design marks and slogans, and all other material comprising the Platform, are the property of the Onor or its affiliates with the exception of the Freelancers marks (collectively, the “Marks”). Unless stated otherwise, all Marks are protected as the copyright, trade dress, trademarks and/or other intellectual properties owned by us or by other parties that have licensed their material to us. You are not authorized to use any of the Marks in any advertising, publicity, or any other commercial manner without the prior written consent of Onor. Your use of the Platform confers no title or ownership in the Platform or the Marks and is not a sale of any rights in the Platform or the Marks. All ownership rights remain in Onor or its third-party suppliers, as the case may be.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>It is our Policy to limit access to our Platform of users who infringe the intellectual property rights of others, as a consequence of which we may terminate your Account. If you find that anything on our Platform infringes on any copyright that you own or control, please contact us using the information provided below. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>We do not claim any ownership rights in any User Content and nothing in these Terms will be deemed to restrict any rights that you may have to use and exploit your User Content. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>You are solely responsible for any User Content that you submit, publish, transmit, or display on, through, or with our Platform. You grant us a non-exclusive, worldwide, royalty-free, and fully paid license to use the User Content, as necessary, for any purposes, including but not limited to providing the Platform services to you, and/or for marketing purposes. All rights in and to the User Content not expressly granted to us in these Terms are reserved by You. The User Content shall hereby through this reference form part of the Platform Content. The User Content is owned by their respective owners or as permitted in this Terms and Conditions.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>By making any User Content available through Platform you hereby grant us a non-exclusive, transferable, worldwide license to use, copy, modify, and distribute your User Content in connection with operating and providing the Platform services to you and to other Account holders. This may also include for marketing purposes. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>You are solely responsible for all your User Content. You represent and warrant that neither your User Content, nor your use and provision of your User Content to be made available through the Platform, nor any use of your User Content by us on or through the Platform will infringe, misappropriate or violate a third party’s intellectual property rights, or rights of publicity or privacy, or result in the violation of any applicable law or regulations.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>You can remove your User Content by specifically deleting it. However, in certain instances, some of your User Content may not be completely removed, and copies of your User Content may continue to exist on the Platform. We are not responsible or liable for the removal or deletion of (or the failure to remove or delete) any of your User Content.</span></span></h2>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h1 align="justify"><a name="_3as4poj" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>THIRD-PARTY SERVICES.&nbsp;</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Platform may permit you to link to other websites, services, or resources on the Internet, and other websites, services or resources may contain links to the Platform. Also, Platform Content may contain links to other websites, services, or resources on the Internet. When you access third party resources on the Internet, you shall do so at your own risk. These other resources are not controlled by us, and you agree that we shall not be responsible or liable for including but not limited to the content, functions, accuracy, legality, appropriateness or any other aspect of such websites or resources. The inclusion of any such link shall not imply our endorsement or any association in any way between us and their operators. You also agree that we will not be responsible or liable in any case, either directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such website or resource.</span></span></p>
                <ol start={27}>
                    <li>
                        <h1 align="justify"><a name="_1pxezwc" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>ALLOWED USES OF PLATFORM </strong></span></span></h1>
                        <ol>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Platform is an online place that helps Clients meet and engage Freelancers who provide Freelancer Services to Clients for purposes, including without limits, business, or any such purposes permitted by law. Platform facilitates such formation of contract between the users, including but not limited to making and receiving payments, Client’s requirements on the Platform, a description of Freelancer skills and experience, rating system for both Freelancers and Clients, dispute resolution services, etc. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>You shall not use, encourage, facilitate, instruct, prompt, direct, convince others to use, the Platform in a manner which contravenes any law, statute, ordinance or regulation; for any other illegal or fraudulent purpose or any purpose which is deleterious to others; or convey, store, post, disseminate, or facilitate content that is illegal, duplicitous or causes some kind of damages to others. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>To ensure compliance with these Terms, and to comply with applicable law or other legal requirements. We reserve the right but are not obligated, to remove or disable access to any Platform Content and User Content on the Platform, at any time and without notice, including, but not limited to, if we, at our sole discretion, consider any User Content to be objectionable or in violation of these Terms. We have the right to investigate violations of these Terms or conduct that affects the Platform services. We may also consult and cooperate with law enforcement authorities to prosecute users who violate the law. User acknowledges that Onor will comply with any legal subpoenas or court orders as advised by legal counsel. </span></span></h2>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h1 align="justify"><a name="_49x2ik5" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>PROHIBITED ACTIVITIES</strong></span></span></h1>
                        <ol>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Post, upload, publish, submit or transmit any Content that: (i) infringes, misappropriates or violates a third party’s patent, copyright, trademark, trade secret, moral rights or other intellectual property rights, or rights of publicity or privacy; (ii) violates, or encourages any conduct that would violate, any applicable law or regulation or would give rise to civil liability; (iii) is fraudulent, false, misleading or deceptive; (iv) is defamatory, obscene, pornographic, vulgar or offensive; (v) promotes discrimination, bigotry, racism, hatred, harassment or harm against any individual or group; (vi) is violent or threatening or promotes violence or actions that are threatening to any person or entity, (vii) promotes illegal or harmful activities or substances, or (viii) for any reason Onor may deem to violate its terms or does not promote Onor’s business purpose. </span></span></h2>
                                <ol>
                                    <li>
                                        <h3 align="justify"><span style={{ color: '#000000' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>FRAUDULENT OR DECEPTIVE CONTENT INCLUDES: </span></span></span></h3>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                </ol>
                <ol type="a">
                    <li>
                        <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Misrepresenting one’s experience, skills, profile details, including profile pictures.</span></span></p>
                    </li>
                    <li>
                        <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Intention to deceive users by representing to them association with other users or agency. </span></span></p>
                    </li>
                    <li>
                        <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Permitting another person to access and use your Account </span></span></p>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>THE ABOVE LIST IS NOT EXHAUSTIVE. </span></span></p>
                <ol>
                    <ol start={2}>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Users using the Platform understand that they shall not engage Freelancer Services for doing work assigned to them by their educational institutions. Work such as assignments, project work, homework, or other activities of such nature shall not be traded on this Platform. </span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Attempt to probe, scan, or test the vulnerability of any of our systems or network or breach any security or authentication measures; </span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Avoid, bypass, remove, deactivate, impair, descramble, or otherwise circumvent any technological measure implemented by us or any of our providers or any other third party (including another user) to protect the Platform or Platform Content; </span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Attempt to access or search the Platform or Platform Content or download Platform Content from the Platform through the use of any engine, software, tool, agent, device or mechanism (including spiders, robots, crawlers, data mining tools or the like) other than the software and/or search agents provided by us or other generally available third-party web browsers; </span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Send any unsolicited or unauthorized advertising, promotional materials, e-mail, junk mail, spam, chain letters or other forms of solicitation; </span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Use any Meta tags or other hidden text or metadata utilizing our trademark(s), logo URL or product name without our express written consent; </span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Use the Platform or Platform Content, or any portion thereof, for any commercial purpose or for the benefit of any third party or in any manner not permitted by these Terms; </span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Forge any TCP/IP packet header or any part of the header information in any e-mail or newsgroup posting, or in any way use the Platform or Platform Content to send altered, deceptive, or false source-identifying information; </span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Attempt to decipher, decompile, disassemble, or reverse engineer any of the software used to provide the Platform or Platform Content; </span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Interfere with, or attempt to interfere with, the access of any user, host, or network, including, without limitation, sending a virus, overloading, flooding, spamming, or mail-bombing the Platform;</span></span></h2>
                        </li>
                    </ol>
                    <li>
                        <h1 align="justify"><a name="_2p2csry" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>UNITED STATES LEGAL COMPLIANCE</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>All users of our Platform (including visitors) hereby through this reference represent and warrant that: </span></span></p>
                <ol>
                    <ol>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>They are not based in any country that is subject to the United States government embargo, or that has been labeled by the United States government as a “terrorist supporting” country.</span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>They are not registered on any United States government list or directory of prohibited or restricted parties.</span></span></h2>
                        </li>
                        <li>
                            <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>All users of our Platform (including visitors) acknowledge and agree to adhere to all of our Terms and that, we do not monitor your compliance to the applicable laws nor is it feasible to do so. We operate on the assumption that you meet all eligibility requirements for accessing and using our Platform.</span></span></h2>
                        </li>
                    </ol>
                    <li>
                        <h1 align="justify"><a name="_147n2zr" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>TERMINATION&nbsp;</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>We reserve the right to terminate your access to all or any part of the Platform at any point of time, without providing any cause, with or without notice, effective immediately, which may result in the forfeiture and destruction of all information associated with your membership. You may terminate your Account if you wish to do so by placing a request on our Platform. Any such termination shall immediately revoke the license(s) granted by us under these Terms, and you shall effective immediately be prohibited from accessing or using the Platform and Platform Content for any reason. The provisions of these Terms which by their nature should survive termination shall survive termination, including but not limited to Licenses, warranty disclaimers, ownership provisions, limitations of liability, and indemnification.</span></span></p>
                <ol start={31}>
                    <li>
                        <h1 align="justify"><a name="_3o7alnk" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>RELEASE.&nbsp;</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>To the maximum extent permissible by applicable law, you hereby absolutely release Onor and its affiliates as well as all other users of the Platform from responsibilities including but not limited to, claims, causes of action, liability, expenses, demands, and/or damages (actual and consequential) of all kinds and nature, known and unknown and claims of negligence, that may arise from the use of or inability to use, or in relation to your use of and/or reliance on the Platform, including any disputes which may arise between users and the acts or omissions of third parties.</span></span></p>
                <ol start={32}>
                    <li>
                        <h1 align="justify"><a name="_23ckvvd" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>WARRANTY DISCLAIMER.&nbsp;</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>THE PLATFORM IS PROVIDED “AS IS,” “AS AVAILABLE” BASIS. THE USE OF PLATFORM IS AT THE USER’S SOLE RISK. THE PLATFORM IS PROVIDED WITHOUT WARRANTY, REPRESENTATION, OR GUARANTEE OF ANY KIND WHATSOEVER, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, </span></span><span style={{ fontSize: 'medium' }}>&nbsp;</span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>ANY WARRANTIES OF TITLE OR ACCURACY AND ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT</span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}> AND ANY WARRANTIES IMPLIED BY ANY COURSE OF PERFORMANCE OR USAGE OF TRADE, ALL OF WHICH ARE EXPRESSLY DISCLAIMED</span></span><span style={{ color: '#3a4557' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>, </span></span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>WITH THE SOLE EXCEPTION OF WARRANTIES (IF ANY) WHICH CANNOT BE EXPRESSLY EXCLUDED UNDER APPLICABLE LAW</span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>. ONOR, OUR DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, PARTNERS, AND CONTENT PROVIDERS DO NOT WARRANT THAT: (I) THE PLATFORM IS OR WILL BE SECURE OR AVAILABLE AT ANY PARTICULAR TIME, INSTANCE OR LOCATION; (II) ANY DEFECTS MATERIAL OR NOT, OR ERRORS WILL BE CORRECTED; (III) ANY/ALL CONTENT OR SOFTWARE AVAILABLE AT OR THROUGH THE PLATFORM IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; (IV) ANY/ALL INFORMATION IS COMPLETE, ACCURATE, UP-TO-DATE, OR RELIABLE; (V) ANY PARTICULAR SERVICE, CONTENT, OR PRODUCT REFERRED TO IN THE PLATFORM IS SAFE, APPROPRIATE, OR EFFECTIVE FOR YOU AND/OR YOUR EMPLOYEES; (VI) THAT RESULTS OF USING THE PLATFORM WILL MEET YOUR REQUIREMENTS(VII) THE USE OF THE PLATFORM PROVIDED BY US SHALL COMPLY WITH ANY LAWS, RULES, REGULATIONS, REQUIREMENTS, POLICIES, QUALIFICATIONS, OR BEST PRACTICES, INCLUDING BUT NOT LIMITED TO PRIVACY LAWS, PROFESSIONAL LICENSURE, OR REIMBURSEMENT; (VIII) THE USE OF THE PLATFORM SHALL NOT RESULT IN LEGAL DUTIES OR LIABILITY. WE DO NOT GUARANTEE IN ANY INSTANCE THAT ANY PARTICULAR CONTENT OR MATERIAL SHALL BE MADE AVAILABLE THROUGH THE PLATFORM.</span></span></p>
                <ol start={33}>
                    <li>
                        <h1 align="justify"><a name="_ihv636" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>INDEMNIFICATION.&nbsp;</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>You acknowledge and agree that you shall at all times defend, indemnify, and hold harmless us, our affiliates and each of our and our affiliates’ including but not limited to, respective officers, directors, contractors, employees, agents, suppliers, and representatives against all liabilities, claims, fees, costs, penalties or sanctions, losses, expenses, and interest of any nature, including reasonable attorneys’ fees, arising out of or which may relate to: (a) your use or misuse of, or access to, the Platform; (b)your violation of any privacy, professional, ethics, licensing, or consumer protection laws, rules, or regulations; (c) your misuse of anyone’s private, proprietary, or Personal data; (d) infringement by you (or any third party using your Account or identity in the Services) of any intellectual property or other rights of any person or entity; or (e) otherwise in violation of these Terms in any way. It is our right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you shall assist and cooperate with us in asserting any available defenses at your expense, including reasonable attorneys’ fees incurred by us.</span></span></p>
                <ol start={34}>
                    <li>
                        <h1 align="justify"><a name="_32hioqz" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>LIMITATION OF LIABILITY.&nbsp;</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>THE USE OF THE PLATFORM IS ENTIRELY AT YOUR OWN RISK. IN NO CASE SHALL WE, NOR OUR OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, AGENTS, PARTNERS, SUPPLIERS, CONTENT PROVIDERS, OR ANY USERS BE LIABLE TO YOU UNDER CONTRACT, TORT, STRICT LIABILITY, NEGLIGENCE, OR ANY OTHER LEGAL OR EQUITABLE THEORY WITH REGARDS TO THE SERVICES FOR: (I) ANY LOST PROFITS, LOSS IN REVENUE, LOSS OF GOODWILL, ANY DATA LOSS, LOSS OF USE, COST OF PROCURING SUBSTITUTE GOODS OR SERVICES, OTHER INTANGIBLE LOSSES, OR INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, COMPENSATORY, EXEMPLARY, RELIANCE, PUNITIVE, LIQUIDATED, OR ANY SIMILAR CONSEQUENTIAL DAMAGES OF ANY TYPE WHATSOEVER (HOWEVER ARISING), (II) ANY, VIRUSES, BUGS, TROJAN HORSES, OR THE LIKE (REGARDLESS OF THE SOURCE OF ORIGIN), (III) ANY PERSONAL INJURY OR HARM, INCLUDING DEATH, WHICH IS CAUSED BY YOUR USE OR MISUSE OF THE PLATFORM, (IV) ANY CLAIMS, DEMANDS, OR DAMAGES ARISING OUT OF OR RELATING TO ANY DISPUTE BETWEEN YOU AND ANY OTHER USER OF THE PLATFORM, OR (V) ANY DIRECT DAMAGES IN EXCESS OF (IN THE AGGREGATE) OF THE GREATER OF (A) ANY FEES PAID BY YOU FOR USING OF THE PLATFORM DURING THE IMMEDIATELY PREVIOUS THREE (3) MONTH PERIOD OR (B) [</span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>$20</span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>]. REMEDIES UNDER THESE TERMS ARE EXCLUSIVE AND ARE LIMITED TO THOSE EXPRESSLY PROVIDED FOR IN THESE TERMS. NOTHING IN THESE TERMS SHALL BE DEEMED TO EXCLUDE OR LIMIT YOUR LIABILITY IN RESPECT OF ANY INDEMNITY GIVEN BY YOU UNDER THESE TERMS.</span></span></p>
                <ol start={35}>
                    <li>
                        <h1 align="justify"><a name="_1hmsyys" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>MODIFICATION.&nbsp;</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>We shall have the right to make modifications or replace any of the Terms, or suspend, change, or discontinue the Platform (including but not limited to, the availability of any featured content, or database,) at any time or instance with or without notice through the Platform. We may also do so by sending you a notice via e-mail, via the Platform, or by any other means of communication. We reserve the right to impose limits on certain features and Platform. We may if required to do so, restrict your access to parts or all of the Platform without notice or liability. We endeavor to try and provide notice of modifications to these Terms. However, you also agree that it is also your responsibility to make reasonable efforts to be aware of such modifications. </span></span></p>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>When you continue to use the Platform after notification of any modifications to the Terms shall mean acceptance of those modifications, and those modifications shall apply to your continued use of the Platform going forward. Your use of the Platform is subject to the Terms in effect at the time of such use.</span></span></p>
                <ol start={36}>
                    <li>
                        <h1 align="justify"><a name="_41mghml" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>CHOICE OF LAW </strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>These Terms, the construction, and enforcement of its terms and the interpretation of the rights and duties of the Parties hereto shall be governed by the laws of the State of Virginia and shall be subject to the jurisdiction of courts in the State of Virginia. This Agreement is executed in the English language, which shall prevail over any translation thereof.</span></span></p>
                <ol start={37}>
                    <li>
                        <h1 align="justify"><a name="_2grqrue" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>MISCELLANEOUS</strong></span></span></h1>
                        <ol>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Entire agreement and severability.&nbsp;These Terms are the entire agreement between you and us with regards to the Platform. These Terms supersede all prior, contemporaneous communications and proposals made (whether oral, written, or electronic) between you and us with regards to the Platform. If any provisions mentioned in these Terms are found to be unenforceable or invalid, that particular provision or provisions will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect and enforceable. In the event of the failure of either Party to exercise in any respect, any right provided for herein shall not be deemed a waiver of any further rights hereunder.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Relationship of the parties.&nbsp;You and Onor are independent contractors. These Terms shall not and do not create a partnership, franchise, joint venture, agency, fiduciary, or employment relationship of any kind between the Parties. You shall not have any authority of any kind to bind us in any respect. Unless expressly stated otherwise in these Terms, there are no third-party beneficiaries to the Terms. We do not have any special relationship with you nor any fiduciary duty.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Force majeure.&nbsp;We will not be liable in any case for any failure or delay in the performance of our obligations for any reason hereunder if such failure results from: (a) any cause beyond our reasonable control, including but not limited to, mechanical, electronic or communications failure or degradation, denial-of-service attacks, (b) any failure by a third-party hosting provider or utility provider, (c) strikes, shortages, riots, fires, acts of God, war, terrorism, pandemics, epidemics and governmental action, civil orders and/or government regulations.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Assignment.&nbsp;You agree that these Terms are personal to you, and are not assignable, transferable or sublicensable by you. We reserve the right to assign, transfer, or delegate any of our rights and obligations hereunder without obtaining consent.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Notices.&nbsp;All notices under these Terms shall be in writing Unless otherwise specified in these Terms. Notices to us shall be sent by e-mail to info@Onor.World. You shall ensure written confirmation of receipt for notice to be effective. Notices to you shall be sent to your last known e-mail address (or the e-mail address of your successor, if any) and/or to any e-mail address that would be reasonably likely to provide notice to you, and such notice shall be effective upon transmission. User hereby agrees and consents to service of legal process by means of electronic mail (e-mail) as an alternative method for service of process of legal complaints, notices, and/or any documents. </span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>No waiver.&nbsp;Our failure to enforce any part of these Terms shall not constitute a waiver of our right to later enforce that or any other part of these Terms. Waiver of compliance in any particular instance does not mean that we will waive compliance in the future.</span></span></h2>
                            </li>
                            <li>
                                <h2 align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Interpretation. The headers are provided only to make this agreement easier to read and understand.</span></span></h2>
                            </li>
                            <li>
                                <p align="justify"><a name="_ck804z3hc6iw" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Dispute Resolution Procedure</span></span></p>
                            </li>
                        </ol>
                    </li>
                </ol>
                <p align="justify"><a name="_wotiqivilxhq" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'small' }}>PLEASE READ THIS AGREEMENT CAREFULLY TO ENSURE THAT YOU UNDERSTAND EACH PROVISION. YOU UNDERSTAND AND AGREE THAT ONOR IS NOT A PARTY TO ANY AGREEMENTS ENTERED INTO BETWEEN USERS, SELLERS AND BUYERS, NOR DOES ONOR PERFORM MAKEUP OR OTHER SERVICES ADVERTISED ON THE PLATFORM. ONOR HAS NO CONTROL OVER THE CONDUCT OF SELLERS OR BUYERS AND OTHER USERS OF THE SERVICE AND DISCLAIMS ALL LIABILITY IN THIS REGARD. THIS AGREEMENT CONTAINS A MANDATORY ARBITRATION OF DISPUTES PROVISION THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS, AND ALSO LIMITS THE REMEDIES AVAILABLE TO YOU IN THE EVENT OF A DISPUTE.</span></span></p>
                <p align="justify"><a name="_c0tkrunrhzm5" /> <br /> </p>
                <p align="justify"><a name="_uj6licwzibw" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'small' }}>USERS HEREBY EXPRESSLY CONSENT AND AGREE TO A MANDATORY INDIVIDUAL ARBITRATION AND CLASS ACTION/JURY TRIAL WAIVER PROVISION THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS.</span></span></p>
                <ol>
                    <ol start={9}>
                        <li>
                            <p align="justify"><a name="_1fcm6t16lfyj" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'small' }}>WITH RESPECT TO ALL PERSONS AND ENTITIES, REGARDLESS OF WHETHER THEY HAVE OBTAINED OR USED THE SERVICE FOR PERSONAL, COMMERCIAL, OR OTHER PURPOSES, ALL CLAIMS MUST BE BROUGHT IN THE PARTIES' INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. THIS WAIVER APPLIES TO CLASS ARBITRATION, AND, UNLESS WE AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON’S CLAIMS. YOU AGREE THAT, BY ENTERING INTO THIS AGREEMENT, YOU AND ONOR ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION, COLLECTIVE ACTION, PRIVATE ATTORNEY GENERAL ACTION, OR OTHER REPRESENTATIVE PROCEEDING OF ANY KIND.</span></span></p>
                        </li>
                    </ol>
                    <li>
                        <h1 align="justify"><a name="_vx1227" /> <span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>NOTICES&nbsp;</strong></span></span></h1>
                    </li>
                </ol>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>You may contact us through&nbsp;our Platform,&nbsp;or the e-mail address given below: E-mail: info@Onor.World.</span></span></p>
                <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>39 SELLER’S TERMS:</strong></span></span></p>
                <p><span style={{ color: '#141414' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><em>These terms concern the relationship between Seller and Onor</em></span></span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>. These Seller’s Terms shall be in addition to the general terms and conditions of the platform:</span></span></p>
                <p>&nbsp;</p>
                <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>1. Seller is not allowed to exchange personal or professional contact information with any user they get introduced through the platform or connect with them in any way which is not on the platform chat or scheduled on the platform</span></span></p>
                <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>2. Seller agrees to use provided Onor Zoom accounts for virtual sessions and agrees to record their sessions.</span></span></p>
                <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>3. Seller is expected to act as a brand ambassador for the Onor platform which will include the following:</span></span></p>
                <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>a. Adhering to the highest degree of conduct during interactions with all buyers or consultees who they have connected with through the platform.</span></span></p>
                <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>b. Displaying Onor merchandize (apron, vest as applicable) when in a session with a client acquired through the Onor platform in order to enhance brand presence</span></span></p>
                <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>c. Only sharing Onor approved documents and images with clients on the Onor platform.</span></span></p>
                <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>4. Seller understands that the broad process guidelines are set-up to simplify the process of sales and delivery of sessions and are expected to follow these process guidelines as laid out by Onor as best as they can. The guidelines will be documented and shared with Seller from time to time in case there are any updates or changes. Should Seller need clarifications or have trouble adhering to these guidelines they are expected to inform the platform accordingly so that a mutually agreeable solution is worked out.</span></span></p>
                <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>5. Seller might be given incentives or reimbursements for either consult sessions or paid sessions depending on current promotions or campaigns being run by the platform. These incentives will be planned and communicated on a monthly / weekly basis and the platform reserves the right to withdraw any such incentives without notice. Any incentive will carry certain terms and conditions for qualification including but not limited to providing video recordings of sessions / consults, following quality and process guidelines. All criteria for incentives will be communicated to the sellers with the proposed incentives.</span></span></p>
                <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>6. Each paid session sold by a Seller and successfully delivered, accredits Seller’s account with revenue equal to 80% of the purchase amount. To withdraw revenue, Seller must have an account with the payment service provider for Onor (Stripe).</span></span></p>
                <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>7. By virtue of using the Platform, Seller consents to Onor recording its sessions, including but not limited to training and quality assistance services. </span></span></p>
                <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>8. RELATIONSHIP BETWEEN ONOR AND SELLER. Seller understands that it is the intention of Onor to only provide the Platform, and in no way shall an employment relationship between Onor and Seller be created. If any relationship between Onor and Seller be considered, at the very most, the relationship shall be solely as an independent contractor and Seller hereby waives and releases any claim or allegation to the contrary. Seller shall have complete and absolute choice to work whenever Seller chooses within a reasonable agreed range of time with the Buyer. Seller further agrees that it shall be considered an independent contractor pursuant to any state or federal law. Seller further agrees that it shall not be misclassified as an employee. Seller waives and forever releases its right to file a wage and hour lawsuit or any other action for damages against the Onor, including but not limited to any alleged unpaid wages, unpaid overtime, unpaid meal and rest breaks, and any penalties and interest. Seller agrees that it shall be considered an independent contractor for purposes of any code, law, order, statute, and/or regulation relating to labor, unemployment insurance, and/or industrial welfare. Contractor agrees to the following: </span></span></p>
                <ul>
                    <li>
                        <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Seller is free from the control and direction of Onor in connection with the performance of the Sessions, both under the contract for the performance of the Sessions and in fact;</span></span></p>
                    </li>
                    <li>
                        <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Seller performs sessions that is outside the usual course of Onor’s business; and</span></span></p>
                    </li>
                    <li>
                        <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Seller is customarily engaged in an independently established trade, occupation, or business of the same nature as that involved in the work performed during the Sessions.</span></span></p>
                    </li>
                    <li>
                        <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Seller further agrees that it shall be considered an independent contractor pursuant to federal law of the United States and the “Borello Test”. See </span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><em>S.G. Borello &amp; Sons, Inc. vs. Dept. of Industrial Relations</em></span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>. </span></span></p>
                    </li>
                </ul>
                <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Seller agrees to the following: </span></span></p>
                <ul>
                    <li>
                        <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Seller has a separate business from Onor.</span></span></p>
                    </li>
                    <li>
                        <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Seller’s services are important but non-essential to Onor.</span></span></p>
                    </li>
                    <li>
                        <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Seller will supply its own tools and materials.</span></span></p>
                    </li>
                    <li>
                        <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Seller is responsible for paying for major tools and materials to do the work during the Sessions.</span></span></p>
                    </li>
                    <li>
                        <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Seller’s service requires skill in order to be performed.</span></span></p>
                    </li>
                    <li>
                        <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Seller’s work will not require an employer or supervisor to watch the Seller. </span></span></p>
                    </li>
                    <li>
                        <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>The Seller’s relationship with Onor shall not be the status of an employer employee relationship under any circumstances whatsoever.</span></span></p>
                    </li>
                </ul>
                <p><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><strong>40 BUYER’S TERMS:</strong></span></span></p>
                <p><span style={{ color: '#141414' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><em>These terms concern the relationship between Buyer and Onor</em></span></span></span><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>. These Buyer’s Terms shall be in addition to the general terms and conditions of the platform. Buyer hereby makes the following statement: </span></span></p>
                <p align="justify"><span style={{ color: '#141414' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><em>I am voluntarily participating in a session provided by Seller and facilitated by Onor. I will be receiving instructions and information concerning makeup techniques and products, which may include applying such products as shown by the artist. I represent and warrant that I have no physical or mental health condition that would prevent my safe participation in these sessions. I agree that I have consulted with and obtained the permission of a physician prior to engaging in these sessions.</em></span></span></span></p>
                <p align="justify"><span style={{ color: '#141414' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><em>I agree that any cancellations or reservation changes made to already scheduled sessions must be mutually agreed with makeup artists. No-show reservations are subject to a cancellation fee of 100% of the service appointment.</em></span></span></span></p>
                <p align="justify"><span style={{ color: '#141414' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><em>I agree to arrive at the designated time for the scheduled session, and resolve all logistics issues prior to scheduled time. Onor is not responsible for time loss due to technical or logistics issues.</em></span></span></span></p>
                <p align="justify"><span style={{ color: '#141414' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><em>I am willingly and voluntarily assuming any risks, injuries or damages, known and unknown, which I might incur as a result of participating in these sessions, and agree that Onor will not have any liability for such injuries or damages, to the maximum extent allowed by applicable law. </em></span></span></span></p>
                <p align="justify"><span style={{ color: '#141414' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><em>I acknowledge and agree that Seller is not a medical professional and does not provide any medical diagnoses or treatments. I agree that if I have any medical condition, I will seek the help of a medical professional.</em></span></span></span></p>
                <p align="justify"><span style={{ color: '#141414' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><em>I agree to seek advice from my health care provider before using any products or applying any products suggested. Onor is held harmless from any health conditions, allergies or any other injuries or reactions caused either through usage of products or manner of usage suggested during a virtual session.</em></span></span></span></p>
                <p align="justify"><span style={{ color: '#141414' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><em>To the maximum extent permitted by applicable law, I hereby (a) waive and release any claims, known or unknown, I may have against Onor, including its makeup artists, officers, directors and employees and agents, arising from or in connection with the services provided by Onor (“Claims”) and agree to indemnify Onor, including its makeup artists, officers, directors and employees and agents, from and against any and all Claims.</em></span></span></span></p>
                <p align="justify"><span style={{ color: '#141414' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><em>I expressly agree that the session can be recorded by Onor and portions of the video might be used including but not limited to specific clips or screenshots may be used to promote the platform and the brand.</em></span></span></span></p>
                <p align="justify"><span style={{ color: '#141414' }}><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}><em>I expressly waive all rights afforded by any statute which limits the effect of a release with respect to unknown claims.</em></span></span></span></p>
                <p align="justify"><span style={{ fontFamily: 'Verdana, serif' }}><span style={{ fontSize: 'medium' }}>Buyer further consents that in order to receive a free promotional session, Buyer accepts these terms and conditions prior to any session.</span></span></p>
            </div>
        </>
    )
    const terms_jsx = (
        <React.Fragment>
            <h4 className="mycol header_h4 mt-xl-2 mb-xl-5">Terms &amp; Conditions</h4>
            <Row className={'d-flex justify-content-center'}>
                <Col sm={12} xs={12}>
                    {TermsContent}
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
                {terms_jsx}
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