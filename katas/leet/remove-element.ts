type Nums = Array<number | string>
type Value = number

/**
 *
 * @param {number[]} nums Array of numbers
 * @param {number} val Value to remove and replace with "_"
 * @returns {number} Count of values different from "val"
 */
export function removeElement(nums: Nums, val: Value): number {
  const char = '_'

  const values = [] as Nums
  const chars = [] as Nums

  let index = 0
  for (const num of nums) {
    if (num === val) {
      values.push(char)
    } else {
      chars.push(num)
    }

    index++
  }

  let iterator = 0
  for (const char of values.concat(chars)) {
    nums[iterator] = char
    iterator++
  }

  return index
}

const nums = [3, 2, 2, 3]
const val = 3
// Output: 2, nums = [2,2,_,_]
console.log(removeElement(nums, val))

console.log('------------------ after nums')

console.table(nums)
// const nums2 = [0, 1, 2, 2, 3, 0, 4, 2]
// const val2 = 2

// // Output: 5, nums = [0,1,4,0,3,_,_,_]
// console.log(removeElement(nums2, val2))
