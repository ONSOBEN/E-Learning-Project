const courseCard = (course) => {
    return `
                <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                    <!-- Card Image -->
                    <img src="${course.img}" alt="Card image"
                        class="w-full h-48 object-cover rounded-t-lg border border-gray-300g">
                    <!-- Title under the image -->
                    <h2 class="text-xl text-center font-semibold mt-4">${course.title}</h2>
                    <!-- Price -->
                    <div class="text-center mt-2">
                        <span class="text-2xl font-bold text-blue-700">$${course.price}</span>
                        <span class="text-base font-medium text-gray-500">/month</span>
                    </div>
                    <ul role="list" class="space-y-5 my-7">
                        <li class="flex items-center">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-700" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0  0  20  20">
                                <path
                                    d="M10 .5a9.5  9.5  0  1  0  9.5  9.5A9.51  9.51  0  0  0  10 .5Zm3.707  8.207-4  4a1  1  0  0  1-1.414  0l-2-2a1  1  0  0  1  1.414-1.414L9  10.586l3.293-3.293a1  1  0  0  1  1.414  1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500 ms-3">${course.desc1}</span>
                        </li>
                        <li class="flex">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-700" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0  0  20  20">
                                <path
                                    d="M10 .5a9.5  9.5  0  1  0  9.5  9.5A9.51  9.51  0  0  0  10 .5Zm3.707  8.207-4  4a1  1  0  0  1-1.414  0l-2-2a1  1  0  0  1  1.414-1.414L9  10.586l3.293-3.293a1  1  0  0  1  1.414  1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500 ms-3">${course.desc2}</span>
                        </li>
                        <li class="flex">
                            <svg class="flex-shrink-0 w-4 h-4 text-blue-700" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0  0  20  20">
                                <path
                                    d="M10 .5a9.5  9.5  0  1  0  9.5  9.5A9.51  9.51  0  0  0  10 .5Zm3.707  8.207-4  4a1  1  0  0  1-1.414  0l-2-2a1  1  0  0  1  1.414-1.414L9  10.586l3.293-3.293a1  1  0  0  1  1.414  1.414Z" />
                            </svg>
                            <span class="text-base font-normal leading-tight text-gray-500 ms-3">${course.desc3}</span>
                        </li>
                    </ul>
                    <button type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Enroll Now</button>
                </div>
`
}
export default courseCard;