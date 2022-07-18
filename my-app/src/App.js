import profilePhoto from './img/profile-photo.jpeg';
import './App.css';

function App() {
  return (
    
    
    <div className="react-container" >
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Kannada&display=swap');
      </style>
      <div className="header-container">
        <div className="h1-holder">
          <h1>Yelyzaveta Yehudkina</h1>
        </div>
        <div className="flex-container">
          <div className="profile-photo-holder">
            <img src={profilePhoto} alt="my photo" width="250" height="250"/>
          </div>
          <div className="contact-inform-holder">
            <div className="h2-holder">
              <h2>My contacts:</h2>
            </div>
            <ul className="contacts-list">
              <li className="contact-item">
                <a className="contact-link" href="tel:+380932754415"><span className="contact-header">Phone number:</span> +38 093 27 54 415</a>
              </li>

              <li className="contact-item">
                <a className="contact-link" href="mailto:lizzadub@gmail.com"><span className="contact-header">E-mail:</span> lizzadub@gmail.com</a>
              </li>

              <li className="contact-item">
                <a className="contact-link" href="https://t.me/liza_yehudkina" target="_blank"><span className="contact-header">Telegram:</span> @liza_yehudkina</a>
              </li>
            </ul>
            
          </div>
        </div>
      </div>

      <div className="experience-container">
          <div className="h2-holder">
            <h2>experience</h2>
          </div>
          <div className="last-job">
            <div className="h3-holder">
              <h3>PE Accountant</h3>
            </div>
            <div className="h4-holder">
              <h4>June 2020 – present «Great Company»</h4>
            </div>
            <div className="h5-holder">
              <h5>Responsibilities:</h5>
            </div>
            <ul className="responsibilities-list">
              <li className="responsibilities-item">Coordination of opening and closing the PEs;</li>
              <li className="responsibilities-item">Quarterly preparation of tax reports and bookkeeping;</li>
              <li className="responsibilities-item">Calculation of taxes, controlling over the timely and correct payments of taxes;</li>
              <li className="responsibilities-item">Coordinating of opening bank accounts;</li>
              <li className="responsibilities-item">Process payments via client-bank;</li>
              <li className="responsibilities-item">PE`s electronic keys administration;</li>
              <li className="responsibilities-item">Provide accounting and doc flow support for PE's related to the company;</li>
              <li className="responsibilities-item">Creation accounting documents (agreements, invoices, acceptance acts).</li>
          </ul>
        </div>

        <div className="second-job">
            <div className="h3-holder">
              <h3>Accounts Payable Accountant</h3>
            </div>
            <div className="h4-holder">
              <h4>November 2019 – April 2020 «Also Great Company»</h4>
            </div>
            <div className="h5-holder">
              <h5>Responsibilities:</h5>
            </div>
            <ul className="responsibilities-list">
              <li className="responsibilities-item">Processing and posting invoices and credit notes in accordance with company procedures;</li>
              <li className="responsibilities-item">Verifying appropriate approvals of invoices, investigate, resolve accounts payable issues to the customer`s satisfaction;</li>
              <li className="responsibilities-item">Cooperating with other work streams within the business centre in overseeing the end-to-end process chain for all relevant processes;</li>
              <li className="responsibilities-item">Updating suppliers data;</li>
              <li className="responsibilities-item">Resolving exceptions;</li>
              <li className="responsibilities-item">Finding new solution to improve the process.</li>
          </ul>
        </div>

        <div className="third-job">
            <div className="h3-holder">
              <h3>Accountant</h3>
            </div>
            <div className="h4-holder">
              <h4>March 2018 – July 2019 «One more Great Company»</h4>
            </div>
            <div className="h5-holder">
              <h5>Responsibilities:</h5>
            </div>
            <ul className="responsibilities-list">
              <li className="responsibilities-item">Participating in monthly, quarterly and annual financial reporting process: single social tax report, personal income tax report, investment report, services report and many another:</li>
              <li className="responsibilities-item">Calculation and payment salary (processing of master data, vacation, sick leaves, business trips);</li>
              <li className="responsibilities-item">Process of hiring and dismissal employees (submission of documents to government authorities, opening/closing salary account in the bank);</li>
              <li className="responsibilities-item">Opening, accounting and closing freelancers (private entrepreneurs);</li>
              <li className="responsibilities-item">Maintenance of primary documentation: invoices, acceptance acts, acts of reconciliation (with private entrepreneurs, suppliers and buyers);</li>
              <li className="responsibilities-item">Creating and signed of client-bank payment orders;</li>
              <li className="responsibilities-item">Acceptance fixed assets, depreciation and write-off fixed assets;</li>
              <li className="responsibilities-item">Cooperating with each work streams in the company;</li>
              <li className="responsibilities-item">Business correspondence.</li>
          </ul>
        </div>
      </div>

      <div className="education-container">
          <div className="h2-holder">
            <h2>education</h2>
          </div>

          <table className="edu-table">
              <tr>
                <td className='period'>September 2016 – December 2017</td>
                <td>National University of Life and Environmental Sciences
                  <br />
                  Master`s degree: Finance and Credit
                </td>
              </tr>
              <tr>
                <td className='period'>September 2014 – June 2016</td>
                <td>National University of Life and Environmental Sciences
                  <br />
                  Bachelor of Science: Finance and Credit
                </td>
              </tr>
              <tr>
                <td className='period'>September 2011 - June 2014</td>
                <td>Technology and Economic College Bilotserkivsky National Agrarian University
                  <br />
                  Finance and Credit - basic (cum laude)
                </td>
              </tr>
          </table>
      </div>

      <div className="additional-education-container">
          <div className="h2-holder">
            <h2>additional education and professional development</h2>
          </div>
          <ul className="add-edu-list">
            <li className="add-edu-item">Excel training (July 2019);</li>
            <li className="add-edu-item">English language courses with native speakers (February 2019);</li>
            <li className="add-edu-item">Courses "Accountant + 1C Program + Chief Accountant" (September 2017 – December 2017);</li>
            <li className="add-edu-item">English language courses with native speakers (January 2017)</li>
          </ul>
      </div>

      <div className="hard-skills-container">
          <div className="h2-holder">
            <h2>skills and tools</h2>
          </div>
          <ul className="hard-skills-list">
            <li className="hard-skills-item">Advanced MS Office User: MS Excel (lookups, pivot table, formulas), MS Word, MS Outlook, MS 
            PowerPoint;</li>
            <li className="hard-skills-item">Google Suite User: Google Sheets, Google Docs, Google Calendar;</li>
            <li className="hard-skills-item">Advanced 1C User;</li>
            <li className="hard-skills-item">Knowledge of SAP;</li>
            <li className="hard-skills-item">Ukrainian – Native;</li>
            <li className="hard-skills-item">English – B1;</li>
            <li className="hard-skills-item">Polish – B1.</li>
          </ul>
      </div>

      <div className="soft-skills-container">
          <div className="h2-holder">
            <h2>personal qualities</h2>
          </div>
          <ul className="soft-skills-list">
            <li className="soft-skills-item">Have good communication skills and effective team player;</li>
            <li className="soft-skills-item">Friendly and sociable;</li>
            <li className="soft-skills-item">Attentive to details and well-organized;</li>
            <li className="soft-skills-item">Quick – learner;</li>
            <li className="soft-skills-item">Multitasking;</li>
            <li className="soft-skills-item">Stress-resistant;</li>
            <li className="soft-skills-item">Have a great sense of humor;</li>
            <li className="soft-skills-item">Hobbies: modern dance, cooking, traveling.</li>
          </ul>
      </div>
    </div>
  );
}

export default App;
