import React, { Fragment , useState } from "react";
import ReactDOM from 'react-dom';
import {useForm , FormProvider , useFormContext , Controller, get} from "react-hook-form";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios"
import {GrUpload} from "react-icons/gr";
import {FaFacebookF ,FaTelegramPlane} from "react-icons/fa";
import {BsYoutube , BsTwitter} from "react-icons/bs";
import {AiOutlineCheck} from "react-icons/ai"
import styles from "./ModalForm.module.css";
import { useTranslation } from 'react-i18next';





const BackDrop =({close , show}) =>{
 
    return(
        <div className={`${styles.backDrop} ${show? styles.show : null}`} onClick={()=>close()}></div>
    )
}

const Overlay =({show , close}) =>{
  const { t, i18n } = useTranslation(["common"])
  const lang=localStorage.getItem("i18nextLng")

  const steps = [t("common:token_details"), t("common:logo"), t("common:short_bio") , t("common:social_media")];

  const useStyles = styled(() => ({
    root: {
      " & .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": { color: " #9F4AE8 !important" }
     
    }
  }));

  const c = useStyles();

  function getSteps() {
   
    return ["step 1", "step 2", "step 3"];
  }
  
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Fragment>
          <h1 className={styles.title}>{t("common:submit_token")}</h1>
          <p className={styles.subTitle}>{t("common:details_token")}</p>
          <input type="text" placeholder={t("common:contract_address")} className={lang=="ar"?styles.inputField_rtl:styles.input_Field_ltr}/>
          <div className={styles.inputs}>
          <div className={lang=="ar"?styles.inputBlock_rtl:styles.inputBlock_ltr}>
          <label>{t("common:name")}</label>
          <input type="text"  className={lang=="ar"?styles.inputField2_rtl:styles.inputField2_ltr}/>
          </div>
          <div className={lang=="ar"?styles.inputBlock_rtl:styles.inputBlock_ltr}>
          <label>{t("common:current_price")}</label>
          <input type="text"  className={lang=="ar"?styles.inputField2_rtl:styles.inputField2_ltr}/>
          </div>
          </div>
          <div className={styles.inputs}>
          <div className={lang=="ar"?styles.inputBlock_rtl:styles.inputBlock_ltr}>
          <label>{t("common:symbol")}</label>
          <input type="text"  className={lang=="ar"?styles.inputField2_rtl:styles.inputField2_ltr}/>
          </div>
          <div className={lang=="ar"?styles.inputBlock_rtl:styles.inputBlock_ltr}>
          <label>{t("common:Network")}</label>
          <input type="text"  className={lang=="ar"?styles.inputField2_rtl:styles.inputField2_ltr}/>
          </div>
          </div>
          <div className={styles.inputs}>
          <div className={lang=="ar"?styles.inputBlock_rtl:styles.inputBlock_ltr}>
          <label>{t("common:token_audited")}</label>
          <select className={lang=="ar"?styles.select_rtl:styles.select_ltr}>
          <option>{t("common:no")}</option>
          <option>{t("common:yes")}</option>
          </select>
          </div>
          
          </div>
          <input type="checkbox" className={lang=="ar"? styles.checkBox_rtl:styles.checkBox_ltr} id="agreement" name="agreement" value="agreement"/>
  <label for="agreement" className={lang=="ar"? styles.agree_rtl:styles.agree_ltr}> {t("common:check")}  <a href="#">{t("common:terms_conditions")}</a> </label>
          </Fragment>
        );
      case 1:
        return (
          <Fragment>
          <h1 className={styles.title}>{t("common:submit_token")}</h1>
          <p className={styles.subTitle}>{t("common:upload_logo")}</p>
          <div className={styles.upload}>
          <input type="file" onChange={(e)=>uploadHandler} value={upload}/>
          <button className={styles.uploadBtn} onClick={()=>uploading}><GrUpload className={styles.uploadIcon}/><br/>{t("common:browse")}</button>
          </div>
          <p className={styles.uploadText}>{t("common:logo_condition")}</p>

          </Fragment>
        );
      case 2:
        return (
          <Fragment>
          <h1 className={styles.title}>{t("common:submit_token")}</h1>
          <p className={styles.subTitle}>{t("common:about_token")}</p>
          <textarea className={lang=="ar"?styles.comment_rtl:styles.comment_ltr} placeholder={t("common:token_bio")}></textarea>
          <p className={lang=="ar"?styles.note_rtl:styles.note_ltr}>{t("common:token_bio_condition")}</p>
          </Fragment>
        );
        case 3:
          return(
            <Fragment>
          <h1 className={styles.title}>{t("common:submit_token")}</h1>
          <p className={styles.subTitle}>{t("common:find_token")}</p>
          <div className="input-group mb-3">
  <div className="input-group-prepend">
    <h6 className={` input-group-text ${styles.socialIcon} ${styles.fbIcon}`} id="basic-addon1"><FaFacebookF/></h6>
  </div>
  <input type="text" className={`form-control ${styles.socialInput} ${styles.fb}`} placeholder="Facebook" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
<div className="input-group-prepend">
  <h6 className={` input-group-text ${styles.socialIcon} ${styles.youIcon}`} id="basic-addon1"><BsYoutube/></h6>
</div>
<input type="text" className={`form-control ${styles.socialInput} ${styles.you}`} placeholder=" Youtube" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
<div className="input-group-prepend">
  <h6 className={` input-group-text ${styles.socialIcon} ${styles.tweetIcon}`} id="basic-addon1"><BsTwitter/></h6>
</div>
<input type="text" className={`form-control ${styles.socialInput} ${styles.tweet}`} placeholder=" Twitter" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
<div className="input-group-prepend">
  <h6 className={` input-group-text ${styles.socialIcon} ${styles.teleIcon}`} id="basic-addon1"><FaTelegramPlane/></h6>
</div>
<input type="text" className={`form-control ${styles.socialInput} ${styles.tele}`} placeholder=" Telegram" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
          </Fragment>
            
          );
      default:
        return (
          <Fragment>
          
          </Fragment>
          
        );
    }
  }

  const methods = useForm();

    const [activeStep, setActiveStep] =useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [upload,setUpload] = useState();

    const uploadHandler = (e)=>{
      setUpload(e.target.files[0])
     
    }

    const uploading =() =>{
      axios.post("")
    }

    const isStepOptional = (step) => {
      
        return step === 1;
        
      };
    
      const isStepSkipped = (step) => {
        return skipped.has(step);
      };
    
      const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      };

      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
          // You probably want to guard against something like this,
          // it should never occur unless someone's actively trying to break something.
          throw new Error("You can't skip a step that isn't optional.");
        }

       
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
          const newSkipped = new Set(prevSkipped.values());
          newSkipped.add(activeStep);
          return newSkipped;
        });
      };

      const onSubmit =(data) =>{
        console.log(data)
      }
    
      const handleReset = () => {
        setActiveStep(0);
      };
    return(
        <div className={`${styles.overlay} ${show? styles.show2 : null}`}>
        <button className={lang=="ar"?styles.closeBtn_rtl:styles.closeBtn_ltr} onClick={()=>close()}>{t("common:close")}</button>

        <Box sx={{ width: '100%' }}>
        <Stepper className={lang=="ar"? styles.stepper_rtl:styles.stepper_ltr} activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
          
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, display:"block !important" }}>
            <div className={styles.check}>
          <AiOutlineCheck className={styles.checkIcon}/>
          
          <p className={styles.subTitle}>{t("common:thanks")}</p>
          <p className={styles.review}>{t("common:final_comment")}</p>
          <button className={styles.return} onClick={()=> close()}>{t("common:return")}</button>
          </div>
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>{t("common:reset")}</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

            <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>{getStepContent(activeStep)}</form>
            </FormProvider>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:"space-between" , pt: 2 }}>
              <Button 
                color="inherit"
                
                disabled={activeStep === 0}
                hidden={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
              {t("common:back")}
              </Button>
             
              
  
              <Button  onClick={handleNext}>
                {activeStep === steps.length - 1 ? t("common:finish") : t("common:next")}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
        
        </div>
    )
}
const ModalForm = ({show , close}) =>{

 

    return(
        
        <Fragment>
      {
        ReactDOM.createPortal(
            <Fragment>
            <BackDrop close={close} show={show}/>
            <Overlay show={show} close={close}/>
            </Fragment>,
            document.getElementById('ModalForm')
        )
      }
        
        
        
        </Fragment>
        
    )
};





export default ModalForm;