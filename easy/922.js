const sortArrayByParityII = (nums) => {
    const n = nums.length;
    let i = 0;
    let j = 1;
    while (i < n && j < n) {
        while (i < n && nums[i] % 2 === 0) {
            i += 2;
        }
        while (j < n && nums[j] % 2 === 1) {
            j += 2;
        }
        if (i < n && j < n) {
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
    return nums;
};