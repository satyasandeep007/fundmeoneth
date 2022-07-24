import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/context";

export default function Example() {
  const { Contract, userInfo } = useContext(GlobalContext);

  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [photo, setPhoto] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [website, setWebsite] = useState("");
  const [country, setCountry] = useState("");
  const [userName, setName] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (userInfo && userInfo.isCreator) {
      setEmail(userInfo.emailId);
      setAbout(userInfo.description);
      setPhoto(userInfo.photo);
      setLinkedIn(userInfo.linkedIn);
      setInstagram(userInfo.instagram);
      setTwitter(userInfo.twitter);
      setWebsite(userInfo.website);
      setCountry(userInfo.country);
      setName(userInfo.name);
      setTags(userInfo.tags.join(","));
    }
  }, []);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const data = {
      email,
      about,
      photo,
      linkedIn,
      instagram,
      twitter,
      website,
      country,
      tags: tags.split(","),
      name: userName
    };

    await addNewCreator(data);
    setEmail("");
    setAbout("");
    setPhoto("");
    setLinkedIn("");
    setInstagram("");
    setTwitter("");
    setWebsite("");
    setCountry("");
    setTags("");
    setName("");
  };

  const addNewCreator = async (createData) => {
    console.log(createData, "ddd");
    const { tags, photo, description, emailId, website, linkedIn, instagram, twitter, country, name } = createData;
    await Contract.createUser(userName + Date.now());
    await Contract.createOrUpdateCreator(tags, photo, description, emailId, website, linkedIn, instagram, twitter, country, name);
  };

  return (
    <form className="space-y-8 divide-y divide-gray-200 p-10" onSubmit={handleSubmitForm}>
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
            <p className="mt-1 text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="username"
                  id="username"
                  value={email}
                  autoComplete="username"
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                About
              </label>
              <div className="mt-1">
                <textarea
                  onChange={(e) => setAbout(e.target.value)}
                  id="about"
                  value={about}
                  name="about"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  defaultValue={""}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Website
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  onChange={(e) => setWebsite(e.target.value)}
                  value={website}
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  onChange={(e) => setPhoto(e.target.value)}
                  type="text"
                  name="username"
                  value={photo}
                  id="username"
                  autoComplete="username"
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/** Personal Info */}
        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
            <p className="mt-1 text-sm text-gray-500">Please mention your social id links</p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                LinkedIn
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setLinkedIn(e.target.value)}
                  type="text"
                  name="linkedin"
                  value={linkedIn}
                  id="linkedin"
                  autoComplete="given-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="youtube" className="block text-sm font-medium text-gray-700">
                instagram
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setInstagram(e.target.value)}
                  type="text"
                  value={instagram}
                  name="youtube"
                  id="youtube"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
                Twitter
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setTwitter(e.target.value)}
                  type="text"
                  value={twitter}
                  name="twitter"
                  id="twitter"
                  autoComplete="given-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  value={country}
                  name="facebook"
                  id="facebook"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  value={userName}
                  name="name"
                  id="name"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
                Tags
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setTags(e.target.value)}
                  type="text"
                  value={tags}
                  name="facebook"
                  id="facebook"
                  autoComplete="family-name"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
