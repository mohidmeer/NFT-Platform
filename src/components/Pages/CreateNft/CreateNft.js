import { useQuery } from "@apollo/client";
import { ConfigProvider, DatePicker } from "antd";
import { useContext, useState } from "react";
import { GET_USER_COLLECTIONS } from "../../../graphql/queries/collectionQueries";
import { AuthContext } from "../../../Provider/AuthProvider";

const CreateNft = () => {
  const { user } = useContext(AuthContext)
  const [nftDetails, setNftDetails] = useState({})
  const [previewImageUrl, setPreviewImageUrl] = useState("")
  const [selectedCollection, setSelectedCollection] = useState("")
  const { data } = useQuery(GET_USER_COLLECTIONS, {
    variables: {
      userId: user._id
    }
  })

  const createNft = () => {
    uploadOnIpfs(nftDetails)
      .then(async (url) => {
        const data = await downloadJSONFromIpfs(url)
          .then(async () => {
            await mintNft(selectedCollection, url, nftDetails, data)
          })
          .catch((err) => {
            console.log(err)
            setAppLoading(false)
          })
      })
      .catch((err) => {
        setAppLoading(false)
      })

  }

  return (
    <div className="max-w-[50%] mx-auto pt-10">
      <h3 className="font-semibold text-3xl text-left">List NFT</h3>
      <div className="flex gap-4">
        <div className="w-full">
          <div className="p-3">
            <label class="flex justify-center w-full h-32 px-4 transition  border-2 border-gray-400 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-500 focus:outline-none">
              <span class="flex items-center space-x-2">
                <span class="font-medium text-gray-600 text-center">
                  PNG,GIF,MP4
                  <br />
                  <div class="text-pink-600  p-2 rounded-full mt-2 bg-white">Choose File</div>
                </span>
              </span>
              <input
                type="file"
                name="file_upload"
                class="hidden"
                onChange={(e) => {
                  setNftDetails({ ...nftDetails, image: e.target.files[0] })
                  setPreviewImageUrl(URL.createObjectURL(e.target.files[0]))
                }}
              />
            </label>

            <div className="flex flex-col">
              <label for="collections">Choose a Collection</label>
              <select
                name="collections"
                className="mt-2 bg-[#f9fafb] p-2 rounded"
                onChange={(e) => setSelectedCollection(e.target.value)}
              >
                {
                  data?.getAllUserCollections.map((d, i) => (
                    <option value={d?.collectionAddress}>{d?.collectionName}</option>
                  ))
                }
              </select>
            </div>

          </div>

          <div className="">
            {/*
            <ul class="grid w-full gap-6 md:grid-cols-2 mt-2 ">
              <li>
                <div onClick={notify} class="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-pink-600 peer-checked:border-green-700 peer-checked:text-green-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div class="block ">
                    <div className="flex flex-col gap-y-2 justify-center items-center">
                      <BsPlus className="text-3xl text-white bg-slate-400 rounded-full" />
                      <div>
                        <span className="font-bold"> &nbsp;Create</span><p>ERC-721</p>
                      </div>
                    </div>
                  </div>
    
                </div>
              </li>
              <li>
                <input type="radio" id="hosting-big2" name="hosting2" value="hosting-big2" class="hidden peer" />
                <label for="hosting-big2" class="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-pink-600 peer-checked:border-green-700 peer-checked:text-green-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div class="block">
                    <div className="flex flex-col gap-y-2 justify-center items-center">
                      <img width={'32px'} src={logo} />
                      <div>
                        <span className="font-bold"> &nbsp;Rarible</span><p className="text-center">RARI</p>
                      </div>
    
                    </div>
                  </div>
    
                </label>
              </li>
            </ul>*/}

          </div>

          <div className="p-3">
            {/*
            <div className="flex justify-between mb-4">
              <div>
                <p className="font-bold text-xl bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">Free Minting</p>
                <p className="text-xs">Buyers will pay gas fees for minting</p>
              </div>
              <div>
                <label class="relative inline-flex items-center mr-5 cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
    
                </label>
              </div>
            </div>*/}

            <div class="mb-4 ">
              <label class="block mb-1 text-sm font-bold  text-gray-900 dark:text-white"> Name</label>
              <input
                onChange={(e) => setNftDetails({ ...nftDetails, name: e.target.value })}
                placeholder="e.g. Redemable Shirt"
                type="text"
                id="disname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-pink-600 block w-full p-2.5  focus:outline-none"
                required
              />
            </div>
            <div class="mb-4 ">
              <label class="block mb-1 text-sm font-bold  text-gray-900 dark:text-white"> Description </label>
              <input
                placeholder="e.g. After purchase you will be able to get"
                type="text" id="disname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-pink-600 block w-full p-2.5  focus:outline-none"
                required
                onChange={(e) => setNftDetails({ ...nftDetails, description: e.target.value })}
              />
            </div>
            <div class="mb-4 ">
              <label class="block mb-1 text-sm font-bold  text-gray-900 dark:text-white"> Price </label>
              <input
                placeholder="price"
                type="number"
                id="diss"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-pink-600 block w-full p-2.5  focus:outline-none"
                onChange={(e) => setNftDetails({ ...nftDetails, price: e.target.value })}
                required
              />
            </div>

            <div class="mb-4 ">
              <label class="block mb-1 text-sm font-bold  text-gray-900 dark:text-white"> Royalties </label>
              <input
                placeholder="0% , 10% , 20% , Maximum is 50%"
                type="number"
                step={'10'}
                min="0"
                max="50"
                id="diss"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-pink-600 block w-full p-2.5  focus:outline-none"
                onChange={(e) => setNftDetails({ ...nftDetails, royalties: e.target.value })}
                required
              />
            </div>

            <div className="mb-4">
              <label class="block mb-1 text-sm font-bold  text-gray-900 dark:text-white">
                Date of Listing Expiration
              </label>

              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#55b947",
                  },
                }}
              >
                <DatePicker
                  showTime
                  placeholder="Select date of expiration"
                  style={{ width: "100%" }}
                  onChange={(e) =>
                    setNftDetails({
                      ...nftDetails,
                      endTime: parseInt(new Date(e.$d).getTime() / 1000),
                    })
                  }
                />
              </ConfigProvider>
            </div>

            {/*<div className="flex justify-between mb-5">
              <div>
                <p className="font-bold text-xl bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">Unlock once purchased</p>
                <p className="text-xs">Content will be unlocked after successfull transtion</p>
              </div>
              <div>
                <label class="relative inline-flex items-center mr-5 cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
    
                </label>
              </div>
            </div>*/}
          </div>
        </div>
        <div>
          {
            previewImageUrl !== "" ?
              <img className="w-[500px] h-[400px]" src={previewImageUrl} alt="" />
              :
              <img src={"https://via.placeholder.com/350x450?text=Preview"} alt="" />
          }
        </div>
      </div>

    </div>
  );
}

export default CreateNft