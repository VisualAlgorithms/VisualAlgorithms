#include <iostream>
#include <sstream>
#include <fstream>

using namespace std;

string encrypt(string text, int s);

int main(int carg, char **varg) {
    if (carg != 4) {
        fprintf(stderr, "%s", "Incorrect Arguments, Try Again.\n");
        exit(1);
    }

    ifstream inputFile;
    string inputString = varg[1];
    inputFile.open(inputString, ios::in);

    if (! inputFile.is_open()) {
        fprintf(stderr, "%s", "Error Opening File.\n");
        exit(1);
    }

    ofstream outputFile;
    string outputString = varg[2];
    outputFile.open(outputString, ios::out | ios::trunc);

    if (! outputFile.is_open()) {
        fprintf(stderr, "%s", "Error Creating Target File.\n");
        exit(1);
    }

    string sshift = varg[3];
    stringstream geek(sshift);
    int shift = 0;
    geek >> shift;

    if (shift > 25 || shift < -25) {
        fprintf(stderr, "%s", "Error With Shift Size. Range must be -25 to 25 \n");
        exit(1);
    }

    string character;

    if (inputFile.is_open() && outputFile.is_open()) {
        while (getline(inputFile, character)) {

            //cout << character << endl;
            outputFile << encrypt(character, shift) <<endl;
        }

        inputFile.close();
        outputFile.close();
    }


    return 0;
}

string encrypt(string text, int s) {
    string result = "";

    if(s<0)
    {
        s= (s+26);
    }

    // traverse text
    for (int i = 0; i < text.length(); i++) {
        // apply transformation to each character
        if(isspace(text[i]) || ispunct(text[i]))
        {
            result += char(int(text[i]));
        }
        // Encrypt Uppercase letters
        else if (isupper(text[i]))
            result += char(int(text[i] + s - 65) % 26 + 65);

            // Encrypt Lowercase letters
        else
            result += char(int(text[i] + s - 97) % 26 + 97);
    }

    // Return the resulting string
    return result;
}
