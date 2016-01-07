import java.util.Scanner;
public class RegexTeamData {
	public static void main(String[] args) {
		Scanner sc = new Scanner (System.in);
		int x = 1; // Number of Rows
		String[] seperatedstrings = new String[x];
		String[] teamnames = new String[x];
		int[] sh3index = new int[x];
		int[] ch3index = new int[x];



		String s1= "<h3> 6127 iBots </h3><p> Wildwood , MO </p><p>Bio: Hello! We are a private team based in Wildwood, Missouri. and is made up of thirteen members who are extremely passionate about science, technology, engineering, and math. This website was created by us as part of our community outreach program. Thanks for stopping by! </p><p>Available For: Shadowing, Mentoring </p><h4>Contact Information</h4><p> stlwizftc@gmail.com </p><p> </p><p> Facebook: Ftc IBots </p> ";
		String s2 = s1.replaceAll(">\\s+",">");

		String s3 = s2.replaceAll("\\s+<","<");
		String s4 = s3.replaceAll("\\s+"," ");

		System.out.println(s4);


		/*for (int i = 0; i < x; i++)
		{
			sh3index[i] = nthIndexOf(s4,"<h3>", i+1);
		}

		for (int i = 0; i < x; i++)
		{
			ch3index[i] = nthIndexOf(s4,"</h3>", i+1);
		}

		for (int i = 0; i < x; i++)
		{
			teamnames[i] = s4.substring(sh3index[i]-1,ch3index[i]);
		}*/



	}
	/*public static int nthIndexOf(String source, String sought, int n) {
	    int index = source.indexOf(sought);
	    if (index == -1) return -1;

	    for (int i = 1; i < n; i++) {
	        index = source.indexOf(sought, index + 1);
	        if (index == -1) return -1;
	    }
	    return index;
}*/
public static int nthIndexOf(final String string, final String token,
     final int index)
  {
     int j = 0;

     for (int i = 0; i < index; i++)
     {
        j = string.indexOf(token, j + 1);
        if (j == -1) break;
     }

     return j;
  }
}

