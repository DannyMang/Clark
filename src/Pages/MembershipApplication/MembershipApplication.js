import React, { useState } from 'react';
import './registerPage.css';
import { memberApplicationState } from '../../Enums';
import MembershipForm from './MembershipForm';
import ConfirmationPage from './ConfirmationPage';
import { CSSTransition } from 'react-transition-group';
import Background from '../../Components/Background/background';

export default function MembershipApplication() {
  const [membershipState, setMembershipState] =
    useState(memberApplicationState.FORM_INFO);
  const [selectedPlan, setSelectedPlan] = useState();
  const appProps = {
    setMembershipState,
    selectedPlan,
    setSelectedPlan
  };
  const membershipArray = [
    {
      isShown: membershipState === memberApplicationState.FORM_INFO,
      Component: <MembershipForm {...appProps} />
    },
    {
      isShown: membershipState === memberApplicationState.CONFIRMATION,
      Component: <ConfirmationPage />
    }
  ];

  return (
    <div>
      <Background/>
      {membershipArray.map((registerView, index) => {
        return (
          <div key={index}>
            <CSSTransition
              in={registerView.isShown}
              timeout={300}
              classNames="fade"
              unmountOnExit>
              <div>
                {registerView.isShown && registerView.Component}
              </div>
            </CSSTransition>
          </div>
        );
      })}
    </div>
  );
}
