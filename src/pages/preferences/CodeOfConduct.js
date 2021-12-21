import React from 'react'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import './TermsOfService.scss'

const CodeOfConduct = (props) => {

    const CodeOfConductContent = (
        <>
            <div>
                <p>Code Of Conduct &amp; dISPUTE RESOLUTION</p>
                <p>Thank you for choosing Onor Services LLC (“Onor”, “we”, “us”, “our”). Being a part of the Onor community means behaving with honesty, respect, and kindness to fellow users.</p>
                <p>All users (“user”, “you”, “your”), including visitors and other users of the Onor Platform, are required to adhere to the terms of this Code of Conduct &amp; Dispute Resolution Assistance Policy (“Agreement”). If any dispute arises between users as a result of the access and use of our Platform, we shall attempt to help the users arrive at an amicable solution. We have laid down our terms in this Agreement that we request and expect the users to follow to avoid any disputes.</p>
                <p>You hereby agree to the following terms as follows:</p>
                <p>&nbsp; &nbsp; 1 BE COURTEOUS</p>
                <p>You agree to be courteous and respectful of others. You shall not use words or share content that may be inflammatory or offensive.&nbsp;</p>
                <p>We strictly prohibit unlawful discrimination or harassment on the basis of race, color, religion, veteran status, national origin, ancestry, pregnancy status, sex, gender identity or expression, age, marital status, mental or physical disability, medical condition, sexual orientation, or any other characteristics protected by law.&nbsp;</p>
                <p>Communicating online through text can lead to misunderstandings, so it is important to give other people the benefit of the doubt and be kind in your interactions: sometimes, it is difficult to know or fully appreciate the situation of the person you are communicating with.</p>
                <p>&nbsp; &nbsp; 2 harassment, discrimination, and bullying</p>
                <p>We strictly prohibit discrimination, harassment, and other forms of bullying, including without limits, verbal, physical, or visual. If you believe that you are being bullied by anyone, whether by other users or by Onor personnel, we recommend you to immediately report the incident to us using the contact information given below or contact the appropriate authorities. We will take action against such persons at our sole discretion.</p>
                <p>&nbsp; &nbsp; 3 Drugs and Alcohol</p>
                <p>We do not permit the users to interact, meet, and carry out services while under the influence of any substances, including prohibited or regulated substances and alcohol. Use of drugs and alcohol results in impaired judgment and performance. If you suspect that anyone you come in contact through the Onor Platform is under the influence of any substance or alcohol, please reach out to us immediately upon such discovery or contact the appropriate authorities.</p>
                <p>&nbsp; &nbsp; 4 improper payments</p>
                <p>We request all users to make appropriate payments solely through the Onor Platform. Please do not make any payments outside of the Onor Platform in any form. We will not be liable if any dispute arises or any harm is caused to any users in such cases.</p>
                <p>&nbsp; &nbsp; 5 Threat of bodily harm</p>
                <p>We do not permit users under any circumstances to send threats of bodily harm, whether through the Platform (if applicable) or otherwise via any method including, phone, e-mail, etc. Upon our discovery of such an event, we may terminate and permanently ban the user Accounts of such users.</p>
                <p>&nbsp; &nbsp; 6 Use of any physical force against ONOR personnel and other users</p>
                <p>No person shall subject the directors, employees, affiliates, agents, representatives or subcontractors of Onor and other users of the Onor Platform to any physical harassment, intimidation, threats, coercion, confinement or use of criminal force, during the course of their business or in connection with the business. Any such act would lead to the consequences mentioned in Section 10 of this Agreement. This shall be in addition to and without prejudice to all our additional legal remedies.</p>
                <p>&nbsp; &nbsp; 7 COMPLIANCE WITH THE LAW</p>
                <p>You are law-abiding and do not participate in, condone, or encourage unlawful or potentially harmful activity.</p>
                <p>This includes threatening or encouraging suicide or self-harm, as well as breach of copyright, defamation, or contempt of court.</p>
                <p>&nbsp; &nbsp; 8 Misuse of the Platform</p>
                <p>You shall not use the Platform in a way that may be considered a misuse of the services provided by us through the Platform. Please contact us using the information given below if you discover any user misusing the Platform. In such an event, we will investigate your report and take appropriate action in our sole discretion in accordance with Section 10 of this Agreement.</p>
                <p>&nbsp; &nbsp; 9 taking action</p>
                <p>We continually strive to improve our services. If you feel that the services provided to you by the Freelancers or us are inadequate, please inform us using the contact information given below.</p>
                <p>&nbsp; &nbsp; 10 Effects of violation of this Agreement</p>
                <p>Violations of this Agreement may result in a range of actions, including:</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; 10.1 Limits on account privileges</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; 10.2 Account suspension</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; 10.3 Cancellation of listing</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; 10.4 Account Cancellation</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; 10.5 Permanent ban on the access and use of the Platform.</p>
                <p>The actions in this Section shall be in addition to and without prejudice to all our additional legal remedies.</p>
                <p>&nbsp; &nbsp; 11 Non-Disparagement</p>
                <p>The users shall not make any false, negative, critical or disparaging statements, implied or expressed about Onor, including, but not limited to, management style, methods of doing business, the quality of services, role in the community, or treatment of employees. The users further agree to do nothing that would damage our reputation or good will;&nbsp;</p>
                <p>&nbsp; &nbsp; 12 NO SPAMMING</p>
                <p>This Platform’s spam policy applies only to unsolicited commercial messages sent you. You are not allowed to send spam messages to other Users.</p>
                <p>&nbsp; &nbsp; 13 Reporting spam</p>
                <p>You will help us by reporting comments that you believe have violated this Agreement.</p>
                <p>You can report a comment by clicking on the “Report” button on the User Profile of the spammer. You can also report spam by sending us an e-mail at: Info@Onor.World</p>
                <p>&nbsp; &nbsp; 14 Claims of copyright infringement</p>
                <p>Claims of copyright infringements can be sent to: Info@Onor.World</p>
                <p>&nbsp; &nbsp; 15 Dispute Resolution Assistance</p>
                <p>Any dispute concerning the subject matter of these Terms, or the breach, termination, or validity thereof (a “Dispute”) may be settled in accordance with the procedures set forth herein. &nbsp;The user seeking resolution of a Dispute (“Complainant”) will first give notice in writing of the Dispute to Onor, setting forth the nature of the Dispute and a concise statement of the issues to be resolved. Onor will contact and notify the user against whom the Dispute complaint has been filed (“Respondent”). The Respondent shall be provided all details of a complaint. The Respondent shall draft a reply (notice) to such complaint and provide relevant evidence supporting their case within 7 days. If the Respondent fails to respond to the notice sent by us within 7 days, we may take appropriate action and decide against the Respondent after the expiry of the above mentioned 7 days. After receiving replies from the users, Onor shall thereafter lay down the process of Dispute resolution. Onor shall take appropriate action if we arrive at the conclusion after considering the evidences provided by the users that, a user has breached the Terms or has otherwise done a wrongful act, or their omission to do something has resulted in a wrongful act (with respect to interactions between and services provided by the users). The decision of Onor taken with respect to a Dispute shall be final and binding upon the users. Notwithstanding the foregoing, if we determine that a Dispute is outside the capacity of Onor to provide assistance in and, that such Dispute cannot be resolved by Onor through good faith efforts and negotiations of senior officers or representatives of the users, we reserve the right to refuse to resolve any such Dispute and, the users shall be free to resolve the Dispute through other means including without limits through arbitration or through courts. Onor shall not be responsible to appoint any arbitrator in such case and we shall not be responsible for the resolution of such Dispute nor will we made a party to such Dispute under any circumstance.</p>
                <p>16. Dispute Resolution Procedure</p>
                <p>PLEASE READ THIS AGREEMENT CAREFULLY TO ENSURE THAT YOU UNDERSTAND EACH PROVISION. YOU UNDERSTAND AND AGREE THAT ONOR IS NOT A PARTY TO ANY AGREEMENTS ENTERED INTO SELLERS AND BUYERS, NOR DOES ONOR PERFORM MAKEUP OR OTHER SERVICES &nbsp;ADVERTISED ON THE PLATFORM. ONOR HAS NO CONTROL OVER THE CONDUCT OF SELLERS OR BUYERS AND OTHER USERS OF THE SERVICE AND DISCLAIMS ALL LIABILITY IN THIS REGARD. THIS AGREEMENT CONTAINS A MANDATORY ARBITRATION OF DISPUTES PROVISION THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS, AND ALSO LIMITS THE REMEDIES AVAILABLE TO YOU IN THE EVENT OF A DISPUTE.</p>
                <p><br /></p>
                <p>THIS AGREEMENT CONTAINS A MANDATORY INDIVIDUAL ARBITRATION AND CLASS ACTION/JURY TRIAL WAIVER PROVISION THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS.</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 15.1.1.1 17. Class Action/Jury Trial Waiver</p>
                <p>WITH RESPECT TO ALL PERSONS AND ENTITIES, REGARDLESS OF WHETHER THEY HAVE OBTAINED OR USED THE SERVICE FOR PERSONAL, COMMERCIAL, OR OTHER PURPOSES, ALL CLAIMS MUST BE BROUGHT IN THE PARTIES' INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. THIS WAIVER APPLIES TO CLASS ARBITRATION, AND, UNLESS WE AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON’S CLAIMS. YOU AGREE THAT, BY ENTERING INTO THIS AGREEMENT, YOU AND ONOR ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION, COLLECTIVE ACTION, PRIVATE ATTORNEY GENERAL ACTION, OR OTHER REPRESENTATIVE PROCEEDING OF ANY KIND.</p>
                <p>&nbsp; &nbsp; 16 18. severability</p>
                <p>If one or more provisions of this Agreement are found to be unlawful, void, or unenforceable, such provision(s) shall be deemed severable and will not affect the validity and/or enforceability of the remaining provisions of the Agreement, which will remain in full force and effect.</p>
                <p>&nbsp; &nbsp; 17 contact</p>
                <p>Please reach out to us at:</p>
                <p>E-mail: Info@Onor.World</p>
                <p>Phone No.: (240) 883-7445</p>
                <p><br /></p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 17.1.1&nbsp;</p>
            </div>
        </>
    )
    const terms_jsx = (
        <React.Fragment>
            <h4 className="mycol header_h4 mt-xl-2 mb-xl-5">Conduct &amp; Dispute resolution</h4>
            <Row className={'d-flex justify-content-center'}>
                <Col sm={12} xs={12}>
                    {CodeOfConductContent}
                </Col>
            </Row>
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
export default connect(mapStateToProps)(CodeOfConduct)