/* class LoadProperties {
    Properties user = loadProperties("src/test/javaScript/properties/user.properties");
    Properties loadProperties(var filePath) {
        Properties properties = new Properties();
        try {
            fh = fopen(getScriptPath(), 0);
            if(fh!=-1) { 
                length = flength(fh);         // Get the length of the file     
                str = fread(fh, length);     // Read in the entire file 
                fclose(fh);                    // Close the file 
                // Display the contents of the file     
                write(str);
            }
        }
    }
} */