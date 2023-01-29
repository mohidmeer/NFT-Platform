import React, { useContext, useState } from 'react'
import { useCollection } from '../../../hooks/useCollection'
import useStorage from '../../../hooks/useStorage'
import { ApplicationContext } from '../../../Provider/ApplicationProvider'
import { AuthContext } from '../../../Provider/AuthProvider'
import SignInWarning from '../../Layouts/SignInWarning'
import Loading from '../../Loading/Loading'
import Background from './Background'
import Collection from './Collection'
import Detail from './Detail'
import Hashlist from './Hashlist'
import Intro from './Intro'
import Kyc from './Kyc'
import Launch from './Launch'
import ProgressBar from './ProgressBar'
import Socials from './Socials'

const CreateCollection = ({ title = "List Your Collection " }) => {
  const { user, isConnected } = useContext(AuthContext)
  const [page, setPage] = useState(1);
  const [values, setValues] = useState({})
  const [image, setImage] = useState(null)
  const { createCollection } = useCollection();
  const { uploadOnIpfs, downloadIpfs } = useStorage()
  const [listingType, setListingType] = useState("nft")
  const [nftDetails, setNftDetails] = useState({})
  const { appLoading, setAppLoading } = useContext(ApplicationContext)

  const handleSubmit = () => {
    setAppLoading(true)
    uploadOnIpfs(image)
      .then(async (url) => {
        const data = await downloadIpfs(url)
        console.log(values)
        const collectionValues = { ...values, image: data.url }
        createCollection(collectionValues, listingType, nftDetails)
      })
      .catch((err) => {
        setAppLoading(false)
        console.log(err)
      })
  }

  const PageDisplay = () => {
    if (page === 1) {
      return <Intro stateChanger={setPage} setValues={setValues} values={values} />;
    } else if (page === 2) {
      return <Collection stateChanger={setPage} setValues={setValues} values={values} setImage={setImage} />;
    } else if (page === 3) {
      return <Detail stateChanger={setPage} setValues={setValues} values={values} />;
    } else if (page === 4) {
      return <Socials stateChanger={setPage} setValues={setValues} values={values} />;
    }
    else if (page === 5) {
      return <Background stateChanger={setPage} setValues={setValues} values={values} />;
    }
    else if (page === 6) {
      return <Launch
        stateChanger={setPage}
        setValues={setValues}
        values={values}
        handleSubmit={handleSubmit}
        setListingType={setListingType}
        nftDetails={nftDetails}
        setNftDetails={setNftDetails}
      />;
    }


  }
  return (
    <div className='mt-8 md:p-10 '>
      {appLoading ? <Loading /> : null}
      {
        user?._id ?
          <>
            <h2 className='font-bold text-3xl'>{title}</h2>
            <ProgressBar stateChanger={setPage} page={page} />
            {PageDisplay()}
          </>
          :
          <SignInWarning title={"Sign In To create your Collection"}/>
      }
    </div>
  )
}

export default CreateCollection
