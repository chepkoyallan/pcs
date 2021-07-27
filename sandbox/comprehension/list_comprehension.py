"""Amodule containig List comprehension tools"""
from typing import Callable, List

def do_list_comprehension(original_list: List, function: Callable) -> List:
    """A function that does list comprehension"""
    return [function(item) for item in original_list]


if __name__=='__main__':
    my_list = ["test", "tube"]
    my_func = len

    print(do_list_comprehension(my_list, my_func))