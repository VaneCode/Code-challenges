def search(nums, target, min , max)
  if(min > max)
    return -1
  else 
    @mid = (min + max) / 2
    if(nums[@mid] == target)
      return @mid
    elsif (nums[@mid]>target)
      return search(nums, target, @mid+1, max)
    elsif (nums[@mid]<target)
      return search(nums, target, min, @mid-1)
    end
  end
end
