import type { Level } from '../types/game';

export const sampleLevels: Level[] = [
  {
    id: 1,
    title: "Khủng hoảng năng lượng",
    situation: "Thành phố đang gặp khủng hoảng thiếu điện nghiêm trọng. Nhu cầu điện tăng cao nhưng nguồn cung không đủ, ảnh hưởng đến sinh hoạt và sản xuất của người dân.",
    description: "Bạn là thị trưởng và cần đưa ra quyết định khẩn cấp để giải quyết vấn đề này trong vòng 6 tháng tới.",
    backgroundImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop",
    economyChoice: {
      id: "coal_power_plant",
      title: "Xây dựng nhà máy điện than",
      description: "Xây dựng nhà máy điện than có công suất lớn để cung cấp điện ổn định và giá rẻ cho thành phố.",
      consequence: "Điện được cung cấp ổn định, thu hút đầu tư, tạo việc làm nhưng gây ô nhiễm không khí nghiêm trọng.",
      backgroundImage: "https://images.unsplash.com/photo-1515444744559-7be63e1600de?w=800&h=600&fit=crop",
      score: {
        economy: 30,
        environment: -25
      }
    },
    environmentChoice: {
      id: "solar_wind_farm",
      title: "Phát triển năng lượng tái tạo",
      description: "Đầu tư vào trang trại điện mặt trời và điện gió, khuyến khích tiết kiệm năng lượng.",
      consequence: "Môi trường được bảo vệ, năng lượng sạch nhưng chi phí cao, cung cấp điện chưa ổn định ngay lập tức.",
      backgroundImage: "https://images.unsplash.com/photo-1508615070457-7baeba4003ab?w=800&h=600&fit=crop",
      score: {
        economy: -15,
        environment: 35
      }
    }
  },
  {
    id: 2,
    title: "Dự án khu công nghiệp mới",
    situation: "Một tập đoàn lớn muốn xây dựng khu công nghiệp hiện đại tại khu vực gần rừng quốc gia, hứa hẹn tạo 5000 việc làm.",
    description: "Dự án này sẽ mang lại lợi ích kinh tế lớn nhưng có thể tác động đến hệ sinh thái địa phương.",
    backgroundImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
    economyChoice: {
      id: "approve_industrial_zone",
      title: "Phê duyệt dự án khu công nghiệp",
      description: "Cho phép xây dựng khu công nghiệp với đầy đủ tiện ích, thu hút thêm nhiều doanh nghiệp.",
      consequence: "Thu hút đầu tư, tạo việc làm, tăng thu ngân sách nhưng phá hủy một phần rừng và gây ô nhiễm.",
      backgroundImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      score: {
        economy: 40,
        environment: -30
      }
    },
    environmentChoice: {
      id: "eco_friendly_development",
      title: "Phát triển khu công nghệ sinh thái",
      description: "Chỉ cho phép dự án với công nghệ xanh, quy mô nhỏ hơn để bảo vệ rừng.",
      consequence: "Bảo vệ được hệ sinh thái, phát triển bền vững nhưng ít việc làm và thu nhập hơn.",
      backgroundImage: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
      score: {
        economy: 15,
        environment: 25
      }
    }
  },
  {
    id: 3,
    title: "Vấn đề giao thông đô thị",
    situation: "Thành phố đang đối mặt với tình trạng ùn tắc giao thông nghiêm trọng và ô nhiễm khí thải từ phương tiện cá nhân.",
    description: "Cần có giải pháp để giải quyết vấn đề giao thông, giảm ùn tắc và cải thiện chất lượng không khí.",
    backgroundImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop",
    economyChoice: {
      id: "expand_highways",
      title: "Mở rộng đường cao tốc và bãi đậu xe",
      description: "Xây thêm đường, cầu vượt và bãi đậu xe lớn để giảm ùn tắc cho ô tô cá nhân.",
      consequence: "Giao thông thuận tiện hơn, kích thích tiêu dùng nhưng tăng ô nhiễm và phụ thuộc ô tô.",
      backgroundImage: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop",
      score: {
        economy: 25,
        environment: -35
      }
    },
    environmentChoice: {
      id: "public_transport_system",
      title: "Phát triển hệ thống giao thông công cộng",
      description: "Đầu tư vào xe buýt điện, tàu điện ngầm và làn đường riêng cho xe đạp.",
      consequence: "Giảm ô nhiễm, giao thông bền vững nhưng chi phí đầu tư cao và thời gian triển khai lâu.",
      backgroundImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
      score: {
        economy: -10,
        environment: 30
      }
    }
  },
  {
    id: 4,
    title: "Quản lý rác thải đô thị",
    situation: "Thành phố đang phải đối mặt với khủng hoảng rác thải. Các bãi rác hiện tại sắp đầy, rác thải tăng 15% mỗi năm.",
    description: "Cần tìm giải pháp xử lý rác thải bền vững cho thành phố với dân số 2 triệu người.",
    backgroundImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&h=800&fit=crop",
    economyChoice: {
      id: "waste_incineration_plant",
      title: "Xây dựng nhà máy đốt rác phát điện",
      description: "Đầu tư nhà máy đốt rác hiện đại để xử lý nhanh và phát điện bán cho lưới điện quốc gia.",
      consequence: "Xử lý rác nhanh chóng, tạo nguồn thu từ điện nhưng có nguy cơ phát thải độc hại và phản đối dân.",
      backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      score: {
        economy: 35,
        environment: -20
      }
    },
    environmentChoice: {
      id: "circular_waste_management",
      title: "Hệ thống tái chế tuần hoàn",
      description: "Xây dựng hệ thống phân loại, tái chế và compost hữu cơ, khuyến khích giảm thiểu rác thải.",
      consequence: "Giảm thiểu tác động môi trường, tạo ý thức người dân nhưng chi phí cao và cần thời gian thay đổi thói quen.",
      backgroundImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
      score: {
        economy: -5,
        environment: 40
      }
    }
  },
  {
    id: 5,
    title: "Phát triển du lịch vùng ven biển",
    situation: "Khu vực ven biển có tiềm năng du lịch lớn với bãi biển đẹp, rạn san hô và rừng ngập mặn quý hiếm.",
    description: "Cần quyết định hướng phát triển du lịch để khai thác tiềm năng kinh tế đồng thời bảo vệ tài nguyên thiên nhiên.",
    backgroundImage: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=800&fit=crop",
    economyChoice: {
      id: "mass_tourism_resort",
      title: "Phát triển du lịch quy mô lớn",
      description: "Xây dựng resort sang trọng, khu vui chơi giải trí và cảng du thuyền để thu hút du khách quốc tế.",
      consequence: "Thu hút đầu tư lớn, tạo nhiều việc làm, tăng thu nhập địa phương nhưng có thể phá hủy rạn san hô và dây chuyền sinh thái.",
      backgroundImage: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
      score: {
        economy: 45,
        environment: -35
      }
    },
    environmentChoice: {
      id: "eco_tourism_conservation",
      title: "Du lịch sinh thái bền vững",
      description: "Phát triển du lịch sinh thái quy mô nhỏ, bảo tồn rạn san hô và giáo dục môi trường cho du khách.",
      consequence: "Bảo vệ hệ sinh thái biển, du lịch có trách nhiệm nhưng thu nhập hạn chế và cần đầu tư dài hạn.",
      backgroundImage: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop",
      score: {
        economy: 20,
        environment: 35
      }
    }
  },
  {
    id: 6,
    title: "Chính sách nông nghiệp",
    situation: "Ngành nông nghiệp địa phương đang gặp khó khăn về năng suất và cạnh tranh với nông sản nhập khẩu.",
    description: "Cần chọn hướng phát triển nông nghiệp để đảm bảo an ninh lương thực và sinh kế nông dân.",
    backgroundImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200&h=800&fit=crop",
    economyChoice: {
      id: "intensive_agriculture",
      title: "Nông nghiệp thâm canh công nghiệp",
      description: "Áp dụng công nghệ cao, thuốc trừ sâu và phân bón hóa học để tăng năng suất tối đa.",
      consequence: "Năng suất cao, giá thành cạnh tranh, tăng thu nhập nông dân nhưng làm suy thoái đất và ô nhiễm nguồn nước.",
      backgroundImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      score: {
        economy: 30,
        environment: -30
      }
    },
    environmentChoice: {
      id: "organic_agriculture",
      title: "Nông nghiệp hữu cơ bền vững",
      description: "Chuyển đổi sang nông nghiệp hữu cơ, tuần hoàn sinh học và đa dạng hóa cây trồng.",
      consequence: "Bảo vệ đất đai, nước sạch, sản phẩm an toàn nhưng năng suất thấp hơn và chi phí chuyển đổi cao.",
      backgroundImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
      score: {
        economy: 10,
        environment: 35
      }
    }
  },
  {
    id: 7,
    title: "Quy hoạch đô thị mới",
    situation: "Thành phố cần mở rộng để đáp ứng tăng trưởng dân số, nhưng xung quanh là đất nông nghiệp và khu vực sinh thái quan trọng.",
    description: "Cần quyết định mô hình phát triển đô thị để cân bằng giữa nhu cầu nhà ở và bảo vệ không gian xanh.",
    backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    economyChoice: {
      id: "suburban_expansion",
      title: "Mở rộng khu đô thị ngoại ô",
      description: "Phát triển các khu dân cư mới rộng lớn với nhà ở giá rẻ và trung tâm thương mại.",
      consequence: "Giải quyết nhu cầu nhà ở, thúc đẩy xây dựng và bán lẻ nhưng chiếm dụng đất nông nghiệp và tăng phụ thuộc ô tô.",
      backgroundImage: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=600&fit=crop",
      score: {
        economy: 35,
        environment: -25
      }
    },
    environmentChoice: {
      id: "smart_compact_city",
      title: "Thành phố thông minh và nhỏ gọn",
      description: "Phát triển theo chiều cao với tòa nhà xanh, không gian công cộng và giao thông bền vững.",
      consequence: "Tiết kiệm đất, giảm tiêu thụ năng lượng, chất lượng sống tốt nhưng chi phí cao và mật độ dân số lớn.",
      backgroundImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      score: {
        economy: 15,
        environment: 30
      }
    }
  },
  {
    id: 8,
    title: "Khủng hoảng nguồn nước",
    situation: "Khu vực đang trải qua hạn hán nghiêm trọng, nguồn nước ngọt cạn kiệt và cạnh tranh gay gắt giữa công nghiệp và dân sinh.",
    description: "Cần tìm giải pháp đảm bảo nguồn nước bền vững cho cả phát triển kinh tế và nhu cầu cơ bản của người dân.",
    backgroundImage: "https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?w=1200&h=800&fit=crop",
    economyChoice: {
      id: "desalination_plant",
      title: "Xây dựng nhà máy khử muối nước biển",
      description: "Đầu tư nhà máy khử muối quy mô lớn để cung cấp nước cho công nghiệp và dân sinh.",
      consequence: "Giải quyết nhanh chóng khủng hoảng nước, phục vụ phát triển kinh tế nhưng tiêu thụ nhiều năng lượng và gây tác động môi trường biển.",
      backgroundImage: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
      score: {
        economy: 40,
        environment: -20
      }
    },
    environmentChoice: {
      id: "water_conservation_program",
      title: "Chương trình tiết kiệm và tái sử dụng nước",
      description: "Thực hiện các biện pháp tiết kiệm nước, thu gom nước mưa và tái chế nước thải.",
      consequence: "Bảo vệ nguồn nước tự nhiên, nâng cao ý thức người dân nhưng không đáp ứng đủ nhu cầu phát triển ngay lập tức.",
      backgroundImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      score: {
        economy: 5,
        environment: 35
      }
    }
  },
  {
    id: 9,
    title: "Ngành công nghiệp dệt may",
    situation: "Ngành dệt may địa phương là nguồn việc làm chính cho hàng chục nghìn lao động nhưng gây ô nhiễm nước nghiêm trọng.",
    description: "Cần quyết định tương lai của ngành công nghiệp quan trọng này giữa lợi ích kinh tế và bảo vệ môi trường.",
    backgroundImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
    economyChoice: {
      id: "expand_textile_production",
      title: "Mở rộng sản xuất dệt may",
      description: "Thu hút thêm đầu tư, xây dựng nhiều nhà máy mới để tận dụng lao động giá rẻ và tăng xuất khẩu.",
      consequence: "Tạo thêm hàng nghìn việc làm, tăng kim ngạch xuất khẩu, phát triển kinh tế nhưng gia tăng ô nhiễm nước và không khí.",
      backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      score: {
        economy: 45,
        environment: -40
      }
    },
    environmentChoice: {
      id: "green_textile_transition",
      title: "Chuyển đổi xanh ngành dệt may",
      description: "Đầu tư công nghệ sạch, xử lý nước thải và chuyển sang sản xuất vải hữu cơ, tái chế.",
      consequence: "Giảm tác động môi trường, nâng cao chất lượng sản phẩm nhưng chi phí cao và có thể mất một phần việc làm trong quá trình chuyển đổi.",
      backgroundImage: "https://images.unsplash.com/photo-1496198631904-dc49adfaedc2?w=800&h=600&fit=crop",
      score: {
        economy: 10,
        environment: 40
      }
    }
  },
  {
    id: 10,
    title: "Chính sách về rừng Amazon",
    situation: "Khu vực rừng nhiệt đới quan trọng đang bị đe dọa bởi nhu cầu mở rộng đất nông nghiệp và khai thác gỗ.",
    description: "Là lãnh đạo khu vực, bạn cần quyết định tương lai của khu rừng này giữa áp lực kinh tế và trách nhiệm môi trường toàn cầu.",
    backgroundImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
    economyChoice: {
      id: "forest_exploitation",
      title: "Khai thác kinh tế rừng",
      description: "Cho phép khai thác gỗ có kiểm soát và chuyển đổi một phần rừng thành đất nông nghiệp, chăn nuôi.",
      consequence: "Tăng thu nhập từ xuất khẩu gỗ và nông sản, tạo việc làm cho người dân địa phương nhưng phá hủy hệ sinh thái quý hiếm.",
      backgroundImage: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1defc?w=800&h=600&fit=crop",
      score: {
        economy: 35,
        environment: -45
      }
    },
    environmentChoice: {
      id: "forest_conservation",
      title: "Bảo tồn và phục hồi rừng",
      description: "Thành lập khu bảo tồn nghiêm ngặt, phát triển du lịch sinh thái và các dịch vụ hệ sinh thái.",
      consequence: "Bảo vệ đa dạng sinh học, điều hòa khí hậu toàn cầu, thu nhập từ du lịch xanh nhưng hạn chế cơ hội kinh tế ngắn hạn.",
      backgroundImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      score: {
        economy: 5,
        environment: 50
      }
    }
  }
];

// Default Game State for testing
export const initialGameState = {
  currentLevel: 1,
  totalScore: {
    economy: 0,
    environment: 0
  },
  choices: [],
  isGameComplete: false
};