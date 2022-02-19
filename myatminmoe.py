# This script only works with python3
# Myat Min Moe

mylist = ["Python", "Kernellix", "Internship", 2020, "Training"]
words = []
def write_file():
    fo = open('logs.txt', 'w')

    for word in mylist:
        fo.write(str(word) + "\n")
    print("Data has been written to logs.txt")
    fo.close()

def read_file():
    fo = open('logs.txt', 'r')
    print("Reading data from logs.txt")
    for word in fo.readlines():
        words.append(word)
    fo.close()

def printing(data):
    print("Here's data from logs.txt...")
    for item in data:
        print(item, end='')

if __name__ == "__main__":
    write_file()
    print()
    read_file()
    print()
    printing(words)




