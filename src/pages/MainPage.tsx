import MainBanner from "../component/main/MainBanner";
import MainGallery from "../component/main/MainGallery";
import MainThousand from "../component/main/MainThousand";
import MainEmoji from "../component/main/MainEmoji";
import Partners from "../component/main/Partners";

const MainPage = () => {
   // const {data, isLoading} = useGetProfileQuery()

   return (
      <>
         <MainBanner />
         {/*<Box  sx={{*/}
         {/*    width: '105%',*/}
         {/*    backgroundImage: `url(${candy})`,*/}
         {/*    backgroundSize: 'cover',*/}
         {/*    objectFit: 'cover',*/}
         {/*    backgroundRepeat: 'no-repeat',*/}
         {/*    height: '100px',*/}
         {/*    // marginTop: '-20px',*/}
         {/*    zIndex: 450,*/}
         {/*    marginLeft: {sm: '-50px', xs: 0},*/}
         {/*    position: 'relative',*/}
         {/*    // opacity: 0.1,*/}
         {/*}}  className={'animate__fadeInUp animate__animated wow'}/>*/}
         <MainGallery />
         <MainThousand />
         <MainEmoji />
         <Partners />
      </>
   );
};

export default MainPage;
