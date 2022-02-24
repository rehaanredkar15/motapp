import React from 'react'
import './ServiceComponent.css';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ServiceComponent = () => {

  
  
  const onSubmit = data => {
    console.log(data);

  };

  return (
    <div className="ServiceWrapper">
      <div className="TopWrapper">
        <h2>Claim Your Business</h2>

        <div className="formWrapper">
          <form onSubmit={onSubmit}>
           <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                  <div className="TextField">
                  <TextField
                    id="outlined-error"
                    label="Business Name"
                    fullWidth

                  />
                  </div>
            </Grid>
            <Grid item xs={6}>
                 <div className="TextField">
                  <TextField
                   fullWidth
                    id="outlined-error-helper-text"
                    label="Email-ID"

                  />
              </div>
            </Grid>
            <Grid item xs={6}>
                  <div className="TextField">
                  <TextField
                    id="outlined-error"
                    label="Business Owner"
                    fullWidth

                  />
                  </div>
            </Grid>
            <Grid item xs={6}>
                 <div className="TextField">
                  <TextField
                   fullWidth
                    id="outlined-error-helper-text"
                    label="Phone Number"

                  />
              </div>
            </Grid>
            <Grid item xs={6}>
                  <div className="TextField">
                  <TextField
                    id="outlined-error"
                    label="Google My Businees Link"
                    fullWidth

                  />
                  </div>
            </Grid>
            <Grid item xs={6}>
                 <div className="TextField">
                  <TextField
                   fullWidth
                    id="outlined-error-helper-text"
                    label="Website"

                  />
              </div>
            </Grid>
            <Grid item xs={6}>
               <div className="TextField">
                  <TextField
                   fullWidth
                    id="outlined-error-helper-text"
                    label="Office Number"
                  
                  />
              </div>
            </Grid>
            <Grid item xs={6}>
                 <div className="TextField">
                  <TextField
                   fullWidth
                    id="outlined-error-helper-text"
                    label="Business City"

                  />
              </div>
            </Grid>
          </Grid>
          </form>
        </div>
      </div>
      
      <div className="ClassTypeWrapper">
        <h2>Add Your Class Type</h2>
          <div className="ButtonsWrapper">
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            
            <Grid item xs={6}>
          <div className="BottomButtonWrap">
             <Button variant="contained" fullWidth color="error">
            Class 1
            </Button>
            </div>
            </Grid>
            
             <Grid item xs={6}>
           <div className="ButtonWrap">
                  <TextField
                    id="outlined-error-helper-text"
                    label="time"
                  />
              </div>
            </Grid>


             <Grid item xs={6}>
          <div className="BottomButtonWrap">
             <Button variant="contained" fullWidth color="error">
            Class 2
            </Button>
            </div>
            </Grid>
            
             <Grid item xs={6}>
           <div className="ButtonWrap">
                  <TextField
                    id="outlined-error-helper-text"
                    label="time"
                  />
              </div>
            </Grid>


             <Grid item xs={6}>
         <div className="BottomButtonWrap">
             <Button variant="contained" fullWidth color="error">
            Class 3
            </Button>
            </div>
            </Grid>
            
             <Grid item xs={6}>
           <div className="ButtonWrap">
                  <TextField
                    id="outlined-error-helper-text"
                    label="time"
                  />
              </div>
            </Grid>
           
            <Grid item xs={6}>
           <div className="BottomButtonWrap">
             <Button variant="contained" fullWidth color="error">
            Class 4
            </Button>
            </div>
            </Grid>
            
             <Grid item xs={6}>
           <div className="ButtonWrap">
                  <TextField
                    id="outlined-error-helper-text"
                    label="time"
                  />
              </div>
            </Grid>
           
            <Grid item xs={6}>
          <div className="BottomButtonWrap">
             <Button variant="contained" fullWidth color="error">
            Class 5
            </Button>
            </div>
            </Grid>
            
             <Grid item xs={6}>
           <div className="ButtonWrap">
                  <TextField
                    id="outlined-error-helper-text"
                    label="time"
                  />
              </div>
            </Grid>

         <Grid item xs={6}>
          <div className="BottomButtonWrap">
             <Button variant="contained" fullWidth color="error">
            Class 6
            </Button>
            </div>
            </Grid>
            
             <Grid item xs={6}>
           <div className="ButtonWrap">
                  <TextField
                    id="outlined-error-helper-text"
                    label="time"
                  />
              </div>
            </Grid>


           <Grid item xs={6}>
            <div className="BottomButtonWrap">
             <Button variant="contained" fullWidth color="error">
            Class 7
            </Button>
            </div>
            </Grid>
            
             <Grid item xs={6}>
           <div className="ButtonWrap">
                  <TextField
                    id="outlined-error-helper-text"
                    label="time"
                  />
              </div>
            </Grid>

          </Grid>
      </div> 
      </div>


     <div className="InputWrapper"> 
      
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4} >
             <TextField
                    id="outlined-error-helper-text"
                    label="Time Duration"
                  />
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
             <TextField
                    id="outlined-error-helper-text"
                    label="Price"
                  />
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
             <TextField
                    id="outlined-error-helper-text"
                    label="Discount"
                  />
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
             <TextField
                    id="outlined-error-helper-text"
                    label="Number of Units"
                  />
          </Grid>
      </Grid>
       
     </div>
       <div className="BusinessHoursWrapper">
          

         <div className="hoursTopWrap">
           <h4>Days</h4>
           <h4>Opening Time</h4>
           <h4>Closing Time </h4>
         </div>

         <div className="HoursDetails">

              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                <Grid item xs={2} sm={4} md={4} >
                <div className="BottomButtonWrap">
                  <Button variant="contained" color="error" fullWidth>
                  Monday
                  </Button>
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4} >
                <div className="BottomButtonWrap">
                  <TextField
                          id="outlined-error-helper-text"
                          label="time"
                        />
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4} >
                  <div className="BottomButtonWrap">
                  <TextField
                          id="outlined-error-helper-text"
                          label="time"
                        />
                  </div>
                </Grid>
                

                <Grid item xs={2} sm={4} md={4} >
                <div className="BottomButtonWrap">
                  <Button variant="contained" color="error" fullWidth>
                  Tuesday
                  </Button>
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4} >
                <div className="BottomButtonWrap">
                  <TextField
                          id="outlined-error-helper-text"
                          label="time"
                        />
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4} >
                  <div className="BottomButtonWrap">
                  <TextField
                          id="outlined-error-helper-text"
                          label="time"
                        />
                  </div>
                </Grid>

                <Grid item xs={2} sm={4} md={4} >
                <div className="BottomButtonWrap">
                  <Button variant="contained" color="error" fullWidth>
                   Wednesday
                  </Button>
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4} >
                <div className="BottomButtonWrap">
                  <TextField
                          id="outlined-error-helper-text"
                          label="time"
                        />
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4} >
                  <div className="BottomButtonWrap">
                  <TextField
                          id="outlined-error-helper-text"
                          label="time"
                        />
                  </div>
                </Grid>

                <Grid item xs={2} sm={4} md={4} >
                <div className="BottomButtonWrap">
                  <Button variant="contained" color="error" fullWidth>
                  Thursday
                  </Button>
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4} >
                <div className="BottomButtonWrap">
                  <TextField
                          id="outlined-error-helper-text"
                          label="time"
                        />
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4} >
                  <div className="BottomButtonWrap">
                  <TextField
                          id="outlined-error-helper-text"
                          label="time"
                        />
                  </div>
                </Grid>

                <Grid item xs={2} sm={4} md={4} >
                <div className="BottomButtonWrap">
                  <Button variant="contained" color="error" fullWidth>
                   Friday
                  </Button>
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4} >
                <div className="BottomButtonWrap">
                  <TextField
                          id="outlined-error-helper-text"
                          label="time"
                        />
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4} >
                  <div className="BottomButtonWrap">
                  <TextField
                          id="outlined-error-helper-text"
                          label="time"
                        />
                  </div>
                </Grid>

                <Grid item xs={2} sm={4} md={4} >
                <div className="BottomButtonWrap">
                  <Button variant="contained" color="error" fullWidth>
                  Saturday
                  </Button>
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4} >
                <div className="BottomButtonWrap">
                  <TextField
                          id="outlined-error-helper-text"
                          label="time"
                        />
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4} >
                  <div className="BottomButtonWrap">
                  <TextField
                          id="outlined-error-helper-text"
                          label="time"
                        />
                  </div>
                </Grid>

                <Grid item xs={2} sm={4} md={4} >
                <div className="BottomButtonWrap">
                  <Button variant="contained" color="error" fullWidth>
                   Sunday
                  </Button>
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4} >
                <div className="BottomButtonWrap">
                  <TextField
                          id="outlined-error-helper-text"
                          label="time"
                        />
                  </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4} >
                  <div className="BottomButtonWrap">
                  <TextField
                          id="outlined-error-helper-text"
                          label="time"
                        />
                  </div>
                </Grid>

            </Grid>

           <div className="bottomButtons">
            <Button variant="contained" href="#outlined-buttons" color="error">
                SUBMIT
            </Button>
            <Button variant="outlined" href="#outlined-buttons">
                CANCEL
            </Button>
           </div>

         </div>
       
       
       </div>

       
        
    </div>
  )
}

export default ServiceComponent