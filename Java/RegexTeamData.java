import java.util.Scanner;
public class RegexTeamData {
	public static void main(String[] args) {
		Scanner sc = new Scanner (System.in);

		String[] teamData = new String[25];

		teamData[0] = "Team Number: 8943 Team Name: OOPS! City: O'Fallon State: IL Bio: Help: Mentoring, Help start a new team Email: Phone Number: Mary Buchanan 618-558-2844 Website: Additional: End Team Number: 10254 Team Name: Robo Lions City: Maryville State: IL Bio: Help: Shadowing, Mentoring, Accepting new members, Help start a new team Email: mchshrobolions@gmail.com Phone Number: Jason Heeren/618-659-5100 Website: RoboLions.com Additional: End ";
		//teamData[0] = "";
		//teamData[0] = "";
		//teamData[0] = "";
		String[] categories = {"Team Number:","Team Name:", "City:","State:","Bio:","Help:","Email:","Phone Number:", "Website:", "Additional:", "End"};
		String[] htmltags = {"<h3>", " ", "</h3><p>", ", ", "</p><p>Bio:","</p><p>Available For:","</p><h4>Contact Information</h4><p>","</p><p>","</p><p>","</p><p>", "</p>"};
		for (int i = 0; i<11; i++) {
			teamData[i+1] = teamData[i].replaceAll(categories[i],htmltags[i]);
		}

		String[] tags1 = {"\\s+<", "\\s+",">\\s+", "\\s+,","</h3>","</p>","</h4>","<p>", "<h4>"};
		String[] tags2 = {"<", " ",">", ",","</h3>\n","</p>\n", " </h4>\n","   <p>   ", "  <h4> "};

		for (int i = 0; i<9; i++) {
			teamData[i+12] = teamData[i+11].replaceAll(tags1[i],tags2[i]);
		}

		teamData[21] = teamData[20].replaceAll("Bio:</p>","</p>");
		System.out.println(teamData[21]);

	}
}

/*String s2 = s1.replaceAll(">\\s+",">");
		String s3 = s2.replaceAll("\\s+<","<");
		String s4 = s3.replaceAll("\\s+"," ");
		String s5 = s4.replaceAll("\\s+,",",");
		String s6 = s5.replaceAll(">",hunna);
		System.out.println(s6);

		for (int i = 0; i < x; i++)
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
		}



	}
	public static int nthIndexOf(String source, String sought, int n) {
	    int index = source.indexOf(sought);
	    if (index == -1) return -1;

	    for (int i = 1; i < n; i++) {
	        index = source.indexOf(sought, index + 1);
	        if (index == -1) return -1;
	    }
	    return index;
}
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
  }*/

